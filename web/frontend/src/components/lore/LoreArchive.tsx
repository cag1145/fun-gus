import { useState } from 'react';
import './LoreArchive.css';

/* ==========================================================================
   World Tab — Locations in SILLIUM
   ========================================================================== */
const LOCATIONS = [
  {
    name: 'The Hub',
    icon: '\u25C8',
    description:
      'The central nervous system of SILLIUM. A vast underground cavern where mycelium threads from every corner of the forest converge. Bioluminescent fungi line the walls, pulsing with information. This is where Fun-Gus welcomes newcomers.',
  },
  {
    name: 'The Nursery',
    icon: '\uD83C\uDF31',
    description:
      'A warm, humid chamber where Birdie tends to developing spores. Rows of tiny fruiting bodies in various stages of growth, each glowing faintly. The air smells of rich earth and new beginnings.',
  },
  {
    name: 'The Deep',
    icon: '\u2B24',
    description:
      'The oldest part of the network, where Truff-Low stores centuries of memories. Dark and quiet, with ancient mycelium threads as thick as tree roots. Only those who know the way can navigate its maze-like tunnels.',
  },
  {
    name: 'The Canopy Bridge',
    icon: '\u2600',
    description:
      'Where the underground network meets the surface world. Buzz and the insect characters operate from here, carrying messages between soil and sky. Shafts of sunlight pierce through, creating pools of warmth.',
  },
  {
    name: 'The Recycling Yards',
    icon: '\u267B',
    description:
      "Inky and Stench's domain. Mountains of fallen leaves, dead wood, and organic matter being slowly transformed into rich soil. Beautiful in its own way -- if you can handle the smell.",
  },
  {
    name: "Mother Oak's Grove",
    icon: '\uD83C\uDF33',
    description:
      'The oldest tree in the forest, connected to every part of SILLIUM. Her roots create a cathedral-like space where all species gather for important councils.',
  },
  {
    name: 'The Frontier',
    icon: '\u2605',
    description:
      'The expanding edge of the network, where new connections are being made. Physa works here, solving routing problems and optimizing connections. Dangerous but exciting.',
  },
  {
    name: 'The Dark Zone',
    icon: '\u25CF',
    description:
      'Where Clostri and other anaerobic organisms live, in pockets devoid of oxygen. Most organisms avoid this place, but it serves an important ecological role.',
  },
];

function WorldTab() {
  return (
    <div className="world-tab">
      <p className="world-intro">
        SILLIUM is more than a network -- it is a world. These are its places,
        each with its own character, its own purpose, and its own stories waiting
        to be discovered.
      </p>
      <div className="locations-grid">
        {LOCATIONS.map((loc) => (
          <div className="location-card" key={loc.name}>
            <div className="location-header">
              <span className="location-icon">{loc.icon}</span>
              <h3 className="location-name">{loc.name}</h3>
            </div>
            <p className="location-desc">{loc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   Episodes Tab — 22 episode summaries across 3 seasons
   ========================================================================== */
interface Episode {
  number: number;
  title: string;
  summary: string;
}

interface Season {
  title: string;
  episodes: Episode[];
}

const SEASONS: Season[] = [
  {
    title: 'Season 1: Discovery',
    episodes: [
      {
        number: 1,
        title: 'First Contact',
        summary:
          'Two children discover a fairy ring and shrink into the underground world of SILLIUM, meeting Fun-Gus for the first time.',
      },
      {
        number: 2,
        title: 'The Thirsty Seedling',
        summary:
          'Fun-Gus teaches Spora how the network delivers water and nutrients to a struggling young tree.',
      },
      {
        number: 3,
        title: 'Spore Day',
        summary:
          "It's Spora's first spore dispersal ceremony. Puff accidentally sets his off early, causing chaos.",
      },
      {
        number: 4,
        title: 'The Light Scout',
        summary:
          'Lumos is tasked with exploring a darkened tunnel, but her fear makes her glow too brightly, attracting unwanted attention.',
      },
      {
        number: 5,
        title: "Stench's Secret",
        summary:
          'Nobody wants to be near Stench, but when the flies stop coming, the whole ecosystem suffers. Can they find a way to appreciate him?',
      },
      {
        number: 6,
        title: 'The Memory Keeper',
        summary:
          'Truff-Low shares an ancient memory of the forest before humans, revealing how much has changed.',
      },
      {
        number: 7,
        title: 'Ink and Sacrifice',
        summary:
          'Inky must dissolve herself to record a critical message, and Spora learns about selfless service.',
      },
      {
        number: 8,
        title: 'Network Down',
        summary:
          'Part of SILLIUM goes dark. The team must find and repair the broken connection before organisms lose touch.',
      },
    ],
  },
  {
    title: 'Season 2: Expansion',
    episodes: [
      {
        number: 9,
        title: 'Above the Soil',
        summary:
          'Spora ventures to the surface for the first time, meeting Buzz and discovering the above-ground world.',
      },
      {
        number: 10,
        title: "The Farmer's Dilemma",
        summary:
          'Leafy the ant farms fungi, but is it partnership or exploitation? A lesson in moral complexity.',
      },
      {
        number: 11,
        title: 'Bacteria City',
        summary:
          'Bacilli invites the team to visit a biofilm -- a thriving bacterial city -- challenging prejudices about "germs."',
      },
      {
        number: 12,
        title: "Winter's Edge",
        summary:
          'Pseudo the frost-bringer threatens the network. But is it malice, or just nature?',
      },
      {
        number: 13,
        title: 'The Ancient One',
        summary:
          "Cyano shares the story of how she created Earth's atmosphere 3.5 billion years ago.",
      },
      {
        number: 14,
        title: "Snapper's Hunt",
        summary:
          'Snapper must hunt nematodes to protect the network, but struggles with the violence of his nature.',
      },
      {
        number: 15,
        title: 'The Mother Tree',
        summary:
          'Mother Oak reveals how she sends extra nutrients to her weakest seedlings through the network.',
      },
    ],
  },
  {
    title: 'Season 3: Crisis',
    episodes: [
      {
        number: 16,
        title: 'Blight Swarm',
        summary:
          'Blight bacteria attack an orchard, and the network must coordinate a defense.',
      },
      {
        number: 17,
        title: 'The Puppet Master',
        summary:
          'Cordyceps begins taking control of insects, turning them into zombies. The most terrifying villain yet.',
      },
      {
        number: 18,
        title: "Agro's Code",
        summary:
          'Agro is caught rewriting plant DNA. Is genetic manipulation always wrong?',
      },
      {
        number: 19,
        title: "Russula's Fracture",
        summary:
          'Beautiful, fragile Russula cracks under pressure, teaching about vulnerability and strength.',
      },
      {
        number: 20,
        title: 'Cross-Kingdom Council',
        summary:
          'For the first time, fungi, bacteria, and insects gather to face a common threat.',
      },
      {
        number: 21,
        title: 'The Strangler',
        summary:
          'Armillaria, the honey fungus, threatens to consume the entire network. Even villains have reasons.',
      },
      {
        number: 22,
        title: "Spora's Choice",
        summary:
          'Season finale. Spora must decide whether to stay in SILLIUM or return above ground. The answer changes everything.',
      },
    ],
  },
];

function EpisodesTab() {
  return (
    <div className="episodes-tab">
      {SEASONS.map((season) => (
        <div className="season-block" key={season.title}>
          <h3 className="season-title">{season.title}</h3>
          <div className="episode-list">
            {season.episodes.map((ep) => (
              <div className="episode-item" key={ep.number}>
                <span className="episode-number">
                  {String(ep.number).padStart(2, '0')}
                </span>
                <div className="episode-body">
                  <h4 className="episode-title">{ep.title}</h4>
                  <p className="episode-summary">{ep.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ==========================================================================
   Hidden Tab — Folklore / adult depth layer
   ========================================================================== */
const HIDDEN_ENTRIES = [
  {
    title: 'The Teacher',
    text: "Ms. Hawthorn guides children to the forest with knowing smiles. She speaks of fairy rings as if she's been inside them. Her students never notice that she seems to know things she shouldn't. In Celtic tradition, the aos si (fairy folk) sometimes walk among humans, tending to the boundaries between worlds. Is Ms. Hawthorn one of them? The story never confirms. It never denies.",
  },
  {
    title: 'Fairy Rings',
    text: "Science tells us that fairy rings form when mycelium grows outward from a central point, fruiting at the expanding edge. Folklore tells us they're dancing grounds for the fae. In SILLIUM, both explanations are true -- because in this world, the science IS the magic.",
  },
  {
    title: 'The Offering',
    text: 'Ancient cultures left offerings at the base of trees and near mushroom circles. They called it appeasing the spirits. We now know that decomposing organic matter feeds the mycelium network, which in turn feeds the trees. The ancients were performing nutrient exchange -- they just described it with different words.',
  },
  {
    title: 'The Green Man',
    text: 'Medieval carvings show a face emerging from leaves and branches. Some mycologists think the Green Man represents the fungal network itself -- the hidden face of the forest that connects all living things.',
  },
  {
    title: 'The Deeper Question',
    text: 'Is SILLIUM just a network, or something more? Truff-Low stores memories. Physa solves problems without a brain. The network coordinates, adapts, and responds. At what point does a network become a mind? This is the question Fun-Gus never answers.',
  },
];

function HiddenTab() {
  return (
    <div className="hidden-tab">
      <p className="hidden-intro">
        Beneath the surface of every story is another story. These fragments hint
        at the deeper layer -- where science blurs into folklore and the
        questions have no easy answers.
      </p>
      <div className="hidden-entries">
        {HIDDEN_ENTRIES.map((entry) => (
          <div className="hidden-card" key={entry.title}>
            <h3 className="hidden-title">{entry.title}</h3>
            <p className="hidden-text">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   LoreArchive — Main Component
   ========================================================================== */
type TabKey = 'world' | 'episodes' | 'hidden';

function LoreArchive() {
  const [activeTab, setActiveTab] = useState<TabKey>('world');

  return (
    <div className="lore-archive">
      {/* Header */}
      <div className="lore-header">
        <h1>Lore Archive</h1>
        <p>The stories, secrets, and science of the underground world</p>
      </div>

      {/* Tabs */}
      <div className="lore-tabs">
        <button
          className={`lore-tab ${activeTab === 'world' ? 'lore-tab--active lore-tab--world' : ''}`}
          onClick={() => setActiveTab('world')}
        >
          {'\uD83C\uDF0D'} World of SILLIUM
        </button>
        <button
          className={`lore-tab ${activeTab === 'episodes' ? 'lore-tab--active lore-tab--episodes' : ''}`}
          onClick={() => setActiveTab('episodes')}
        >
          {'\uD83D\uDCFA'} Episodes
        </button>
        <button
          className={`lore-tab ${activeTab === 'hidden' ? 'lore-tab--active lore-tab--hidden' : ''}`}
          onClick={() => setActiveTab('hidden')}
        >
          {'\uD83D\uDD2E'} The Hidden Layer
        </button>
      </div>

      {/* Content */}
      <div className="lore-content">
        {activeTab === 'world' && <WorldTab />}
        {activeTab === 'episodes' && <EpisodesTab />}
        {activeTab === 'hidden' && <HiddenTab />}
      </div>
    </div>
  );
}

export default LoreArchive;
