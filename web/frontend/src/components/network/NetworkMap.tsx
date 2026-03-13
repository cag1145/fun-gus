import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { characterApi } from '../../api/client';
import type { CharacterSummary } from '../../api/client';
import './NetworkMap.css';

/* ---------- Types ---------- */
interface NodePosition {
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
  type: 'ally' | 'rival' | 'mentor';
}

/* ---------- Node positions (percentage-based for SVG viewBox 0 0 1000 800) ---------- */
const NODE_POSITIONS: Record<string, NodePosition> = {
  /* Center hub */
  'the-hub': { x: 500, y: 400 },

  /* Fungi — left arc */
  'fun-gus': { x: 400, y: 340 },
  'spora': { x: 320, y: 280 },
  'truff-low': { x: 260, y: 360 },
  'lumos': { x: 220, y: 460 },
  'chanty': { x: 260, y: 550 },
  'morel': { x: 340, y: 620 },
  'puff': { x: 180, y: 300 },
  'inky': { x: 140, y: 400 },
  'stench': { x: 140, y: 510 },
  'physa': { x: 340, y: 190 },
  'snapper': { x: 420, y: 600 },
  'russula': { x: 180, y: 620 },
  'birdie': { x: 100, y: 310 },
  'rhiza': { x: 320, y: 420 },

  /* Bacteria — right arc */
  'nitro': { x: 700, y: 280 },
  'strepto': { x: 760, y: 360 },
  'lacto': { x: 780, y: 460 },
  'cyano': { x: 740, y: 550 },
  'bacilli': { x: 680, y: 620 },
  'blight': { x: 860, y: 300 },
  'agro': { x: 880, y: 410 },
  'pseudo': { x: 860, y: 520 },
  'clostri': { x: 820, y: 620 },
  'virion': { x: 680, y: 200 },
  'proto': { x: 620, y: 280 },

  /* Insects — top arc */
  'buzz': { x: 500, y: 160 },
  'tardi': { x: 580, y: 120 },
  'lady': { x: 420, y: 120 },
  'glow': { x: 500, y: 80 },
  'atlas': { x: 620, y: 160 },
  'dung': { x: 380, y: 160 },
  'silk': { x: 560, y: 200 },
  'flutter': { x: 440, y: 200 },
  'leafy': { x: 340, y: 100 },
  'mantis': { x: 660, y: 100 },
};

/* ---------- Connections between characters ---------- */
const CONNECTIONS: Connection[] = [
  /* Fun-Gus relationships */
  { from: 'fun-gus', to: 'spora', type: 'mentor' },
  { from: 'fun-gus', to: 'truff-low', type: 'ally' },
  { from: 'fun-gus', to: 'the-hub', type: 'ally' },
  { from: 'fun-gus', to: 'rhiza', type: 'ally' },
  { from: 'fun-gus', to: 'lumos', type: 'ally' },

  /* Core network connections */
  { from: 'rhiza', to: 'truff-low', type: 'ally' },
  { from: 'rhiza', to: 'the-hub', type: 'ally' },
  { from: 'physa', to: 'the-hub', type: 'ally' },
  { from: 'buzz', to: 'the-hub', type: 'ally' },

  /* Fungal alliances */
  { from: 'inky', to: 'stench', type: 'ally' },
  { from: 'birdie', to: 'spora', type: 'ally' },
  { from: 'chanty', to: 'morel', type: 'ally' },
  { from: 'puff', to: 'spora', type: 'ally' },
  { from: 'snapper', to: 'rhiza', type: 'ally' },

  /* Bacteria alliances */
  { from: 'nitro', to: 'strepto', type: 'ally' },
  { from: 'lacto', to: 'bacilli', type: 'ally' },
  { from: 'cyano', to: 'proto', type: 'mentor' },

  /* Cross-kingdom connections */
  { from: 'buzz', to: 'stench', type: 'ally' },
  { from: 'leafy', to: 'fun-gus', type: 'ally' },
  { from: 'flutter', to: 'buzz', type: 'ally' },
  { from: 'glow', to: 'lumos', type: 'ally' },
  { from: 'dung', to: 'inky', type: 'ally' },

  /* Rivalries / threats */
  { from: 'blight', to: 'rhiza', type: 'rival' },
  { from: 'agro', to: 'the-hub', type: 'rival' },
  { from: 'pseudo', to: 'the-hub', type: 'rival' },
  { from: 'clostri', to: 'strepto', type: 'rival' },
  { from: 'blight', to: 'nitro', type: 'rival' },
  { from: 'snapper', to: 'mantis', type: 'rival' },

  /* Mentor connections */
  { from: 'cyano', to: 'bacilli', type: 'mentor' },
  { from: 'truff-low', to: 'spora', type: 'mentor' },
  { from: 'silk', to: 'flutter', type: 'mentor' },
];

/* ---------- Color maps ---------- */
const KINGDOM_COLORS: Record<string, string> = {
  fungi: '#22d3b8',
  bacteria: '#f5a623',
  insects: '#a78bfa',
  hub: '#22d3b8',
};

const CONNECTION_COLORS: Record<string, string> = {
  ally: '#22d3b8',
  rival: '#ef4444',
  mentor: '#f5a623',
};

/* ---------- Node radius ---------- */
const NODE_RADIUS = 18;
const HUB_RADIUS = 28;

/* ==========================================================================
   NetworkMap Component
   ========================================================================== */
function NetworkMap() {
  const [characters, setCharacters] = useState<CharacterSummary[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    characterApi.list().then(setCharacters).catch(() => {});
  }, []);

  /* Check if a node is connected to the hovered node */
  const isConnected = useCallback(
    (nodeId: string): boolean => {
      if (!hoveredNode) return true;
      if (nodeId === hoveredNode) return true;
      return CONNECTIONS.some(
        (c) =>
          (c.from === hoveredNode && c.to === nodeId) ||
          (c.to === hoveredNode && c.from === nodeId)
      );
    },
    [hoveredNode]
  );

  /* Check if a connection involves the hovered node */
  const isConnectionActive = useCallback(
    (conn: Connection): boolean => {
      if (!hoveredNode) return true;
      return conn.from === hoveredNode || conn.to === hoveredNode;
    },
    [hoveredNode]
  );

  /* Get character data for a node */
  const getCharacter = (id: string): CharacterSummary | undefined => {
    return characters.find((c) => c.id === id);
  };

  /* Get kingdom for a node */
  const getKingdom = (id: string): string => {
    if (id === 'the-hub') return 'hub';
    const char = getCharacter(id);
    return char?.kingdom || 'fungi';
  };

  /* Selected character for popup */
  const selectedChar = selectedNode ? getCharacter(selectedNode) : null;
  const selectedPos = selectedNode ? NODE_POSITIONS[selectedNode] : null;

  return (
    <div className="network-map">
      {/* Header */}
      <div className="network-header">
        <h1>Network Map</h1>
        <p>The interconnected world of SILLIUM -- hover and click to explore</p>
      </div>

      {/* SVG Map */}
      <div className="network-svg-container">
        <svg
          viewBox="0 0 1000 720"
          className="network-svg"
          onClick={() => setSelectedNode(null)}
        >
          {/* Connection lines */}
          <g className="connections-layer">
            {CONNECTIONS.map((conn, idx) => {
              const fromPos = NODE_POSITIONS[conn.from];
              const toPos = NODE_POSITIONS[conn.to];
              if (!fromPos || !toPos) return null;

              const active = isConnectionActive(conn);

              return (
                <line
                  key={idx}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke={CONNECTION_COLORS[conn.type]}
                  strokeWidth={active && hoveredNode ? 2.5 : 1.5}
                  strokeOpacity={active ? (hoveredNode ? 0.8 : 0.25) : 0.06}
                  strokeDasharray={conn.type === 'rival' ? '6,4' : 'none'}
                  className="connection-line"
                />
              );
            })}
          </g>

          {/* Nodes */}
          <g className="nodes-layer">
            {Object.entries(NODE_POSITIONS).map(([id, pos]) => {
              const kingdom = getKingdom(id);
              const color = KINGDOM_COLORS[kingdom] || '#22d3b8';
              const isHub = id === 'the-hub';
              const radius = isHub ? HUB_RADIUS : NODE_RADIUS;
              const connected = isConnected(id);
              const isHovered = hoveredNode === id;
              const char = getCharacter(id);
              const label = isHub ? 'The Hub' : char?.name || id;

              return (
                <g
                  key={id}
                  className={`network-node ${isHovered ? 'network-node--hovered' : ''}`}
                  opacity={connected ? 1 : 0.15}
                  onMouseEnter={() => setHoveredNode(id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isHub) {
                      setSelectedNode(selectedNode === id ? null : id);
                    }
                  }}
                  style={{ cursor: isHub ? 'default' : 'pointer' }}
                >
                  {/* Glow ring on hover */}
                  {isHovered && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={radius + 8}
                      fill="none"
                      stroke={color}
                      strokeWidth={2}
                      strokeOpacity={0.4}
                      className="node-glow"
                    />
                  )}

                  {/* Node circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={radius}
                    fill={`${color}22`}
                    stroke={color}
                    strokeWidth={isHovered ? 3 : 2}
                  />

                  {/* Inner dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHub ? 8 : 5}
                    fill={color}
                    opacity={0.8}
                  />

                  {/* Label */}
                  <text
                    x={pos.x}
                    y={pos.y + radius + 16}
                    textAnchor="middle"
                    className="node-label"
                    fill={connected ? '#e0f0e8' : '#e0f0e844'}
                    fontSize={isHub ? 13 : 11}
                    fontWeight={isHub ? 700 : 500}
                    fontFamily="'Fredoka', sans-serif"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Mini-profile popup */}
        {selectedChar && selectedPos && (
          <div
            className="node-popup"
            style={{
              left: `${(selectedPos.x / 1000) * 100}%`,
              top: `${(selectedPos.y / 720) * 100}%`,
            }}
          >
            <div className="node-popup-inner">
              <h3 className="node-popup-name">{selectedChar.name}</h3>
              <p className="node-popup-species">{selectedChar.species}</p>
              <span
                className={`badge badge-${selectedChar.kingdom}`}
                style={{ marginBottom: '0.5rem', display: 'inline-block' }}
              >
                {selectedChar.kingdom.charAt(0).toUpperCase() +
                  selectedChar.kingdom.slice(1)}
              </span>
              <p className="node-popup-personality">
                {selectedChar.personality.length > 100
                  ? selectedChar.personality.slice(0, 100) + '...'
                  : selectedChar.personality}
              </p>
              <Link
                to="/characters"
                className="node-popup-link"
                onClick={(e) => e.stopPropagation()}
              >
                View Profile {'\u2192'}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="network-legend">
        <div className="legend-group">
          <span className="legend-title">Kingdoms</span>
          <div className="legend-items">
            <span className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: '#22d3b8' }}
              />
              Fungi
            </span>
            <span className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: '#f5a623' }}
              />
              Bacteria
            </span>
            <span className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: '#a78bfa' }}
              />
              Insects
            </span>
          </div>
        </div>
        <div className="legend-group">
          <span className="legend-title">Connections</span>
          <div className="legend-items">
            <span className="legend-item">
              <span className="legend-line legend-line--ally" />
              Ally
            </span>
            <span className="legend-item">
              <span className="legend-line legend-line--rival" />
              Rival
            </span>
            <span className="legend-item">
              <span className="legend-line legend-line--mentor" />
              Mentor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkMap;
