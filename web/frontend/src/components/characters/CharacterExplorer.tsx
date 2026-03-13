import { useState, useEffect, useMemo, useCallback } from 'react';
import { characterApi } from '../../api/client';
import type { CharacterSummary, CharacterFull } from '../../api/client';
import { CharacterCard, CharacterModal } from './CharacterCard';
import './CharacterExplorer.css';

/* ---------- Filter definitions ---------- */
const kingdomTabs = [
  { value: 'all', label: 'All', emoji: '', className: '' },
  { value: 'fungi', label: 'Fungi', emoji: '\uD83C\uDF44', className: 'character-explorer__tab--fungi' },
  { value: 'bacteria', label: 'Bacteria', emoji: '\uD83E\uDDA0', className: 'character-explorer__tab--bacteria' },
  { value: 'insects', label: 'Insects', emoji: '\uD83D\uDC1B', className: 'character-explorer__tab--insects' },
];

const alignmentTabs = [
  { value: 'all', label: 'All', className: '' },
  { value: 'hero', label: 'Heroes', className: 'character-explorer__tab--hero' },
  { value: 'villain', label: 'Villains', className: 'character-explorer__tab--villain' },
  { value: 'complex', label: 'Complex', className: 'character-explorer__tab--complex' },
];

/* ---------- Skeleton component ---------- */
function SkeletonCard() {
  return (
    <div className="character-explorer__skeleton-card">
      <div className="character-explorer__skeleton-image" />
      <div className="character-explorer__skeleton-body">
        <div className="character-explorer__skeleton-line" />
        <div className="character-explorer__skeleton-line character-explorer__skeleton-line--short" />
        <div className="character-explorer__skeleton-line character-explorer__skeleton-line--tiny" />
      </div>
    </div>
  );
}

/* ==========================================================================
   CharacterExplorer — Main page component
   ========================================================================== */
export default function CharacterExplorer() {
  const [characters, setCharacters] = useState<CharacterSummary[]>([]);
  const [kingdom, setKingdom] = useState<string>('all');
  const [alignment, setAlignment] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  /* --- Fetch all characters on mount --- */
  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await characterApi.list();
      setCharacters(data);
    } catch (err) {
      console.error('Failed to fetch characters:', err);
      setError('Failed to load characters. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  /* --- Close modal on Escape key --- */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && selectedCharacter) {
        setSelectedCharacter(null);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCharacter]);

  /* --- Lock body scroll when modal is open --- */
  useEffect(() => {
    if (selectedCharacter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCharacter]);

  /* --- Client-side filtering --- */
  const filtered = useMemo(() => {
    let result = characters;

    if (kingdom !== 'all') {
      result = result.filter((c) => c.kingdom === kingdom);
    }

    if (alignment !== 'all') {
      result = result.filter((c) => c.alignment === alignment);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.species.toLowerCase().includes(q)
      );
    }

    return result;
  }, [characters, kingdom, alignment, search]);

  /* --- Handle card click -> fetch full detail --- */
  const handleCardClick = useCallback(async (id: string) => {
    setModalLoading(true);
    try {
      const full = await characterApi.get(id);
      setSelectedCharacter(full);
    } catch (err) {
      console.error('Failed to fetch character details:', err);
    } finally {
      setModalLoading(false);
    }
  }, []);

  /* --- Render --- */
  return (
    <div className="character-explorer">
      {/* Page Header */}
      <header className="character-explorer__header">
        <h1 className="character-explorer__title">Character Explorer</h1>
        <p className="character-explorer__subtitle">
          Meet the 34+ organisms of SILLIUM
        </p>
      </header>

      {/* Filters */}
      <div className="character-explorer__filters">
        <div className="character-explorer__filter-row">
          {/* Kingdom Tabs */}
          {kingdomTabs.map((tab) => (
            <button
              key={tab.value}
              className={`character-explorer__tab ${tab.className} ${
                kingdom === tab.value ? 'character-explorer__tab--active' : ''
              }`}
              onClick={() => setKingdom(tab.value)}
              aria-pressed={kingdom === tab.value}
            >
              {tab.emoji && <span>{tab.emoji}</span>}
              {tab.label}
            </button>
          ))}

          <div className="character-explorer__filter-sep" />

          {/* Alignment Tabs */}
          {alignmentTabs.map((tab) => (
            <button
              key={tab.value}
              className={`character-explorer__tab ${tab.className} ${
                alignment === tab.value ? 'character-explorer__tab--active' : ''
              }`}
              onClick={() => setAlignment(tab.value)}
              aria-pressed={alignment === tab.value}
            >
              {tab.label}
            </button>
          ))}

          <div className="character-explorer__filter-sep" />

          {/* Search */}
          <div className="character-explorer__search-wrapper">
            <span className="character-explorer__search-icon">{'\uD83D\uDD0D'}</span>
            <input
              type="text"
              className="character-explorer__search"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search characters by name"
            />
          </div>
        </div>
      </div>

      {/* Count */}
      {!loading && !error && (
        <p className="character-explorer__count">
          Showing{' '}
          <span className="character-explorer__count-number">
            {filtered.length}
          </span>{' '}
          of{' '}
          <span className="character-explorer__count-number">
            {characters.length}
          </span>{' '}
          characters
        </p>
      )}

      {/* Error State */}
      {error && (
        <div className="character-explorer__error">
          <p className="character-explorer__error-text">{error}</p>
          <button
            className="character-explorer__error-retry"
            onClick={fetchCharacters}
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="character-explorer__skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Character Grid */}
      {!loading && !error && (
        <div className="character-explorer__grid">
          {filtered.length > 0 ? (
            filtered.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                onClick={() => handleCardClick(char.id)}
              />
            ))
          ) : (
            <div className="character-explorer__empty">
              <div className="character-explorer__empty-icon">{'\uD83C\uDF44'}</div>
              <p className="character-explorer__empty-text">
                No characters match your filters. Try adjusting your search.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal Loading Indicator (subtle) */}
      {modalLoading && (
        <div className="character-modal-backdrop">
          <div
            className="character-explorer__skeleton-card"
            style={{ maxWidth: 400, margin: '0 auto' }}
          >
            <div className="character-explorer__skeleton-image" />
            <div className="character-explorer__skeleton-body">
              <div className="character-explorer__skeleton-line" />
              <div className="character-explorer__skeleton-line character-explorer__skeleton-line--short" />
            </div>
          </div>
        </div>
      )}

      {/* Character Modal */}
      {selectedCharacter && !modalLoading && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
