import type { CharacterSummary, CharacterFull } from '../../api/client';
import './CharacterCard.css';

/* ---------- Kingdom helpers ---------- */
const kingdomEmoji: Record<string, string> = {
  fungi: '\uD83C\uDF44',
  bacteria: '\uD83E\uDDA0',
  insects: '\uD83D\uDC1B',
};

const kingdomLabel: Record<string, string> = {
  fungi: 'Fungi',
  bacteria: 'Bacteria',
  insects: 'Insects',
};

const alignmentIcon: Record<string, string> = {
  hero: '\u2694',
  villain: '\uD83D\uDC80',
  complex: '\u2696',
};

/* ==========================================================================
   CharacterCard — Grid card (summary view)
   ========================================================================== */
interface CharacterCardProps {
  character: CharacterSummary;
  onClick: () => void;
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <article
      className="character-card"
      data-kingdom={character.kingdom}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${character.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image */}
      <div className="character-card__image-wrapper">
        {character.image ? (
          <img
            className="character-card__image"
            src={character.image}
            alt={character.name}
            loading="lazy"
          />
        ) : (
          <div
            className={`character-card__placeholder character-card__placeholder--${character.kingdom}`}
          >
            {kingdomEmoji[character.kingdom] || '\uD83C\uDF44'}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="character-card__body">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__species">{character.species}</p>
        <div className="character-card__meta">
          <span
            className={`character-card__kingdom-badge character-card__kingdom-badge--${character.kingdom}`}
          >
            {kingdomLabel[character.kingdom] || character.kingdom}
          </span>
          <span
            className="character-card__alignment"
            title={character.alignment}
          >
            {alignmentIcon[character.alignment] || ''}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ==========================================================================
   CharacterModal — Expanded detail overlay
   ========================================================================== */
interface CharacterModalProps {
  character: CharacterFull;
  onClose: () => void;
}

export function CharacterModal({ character, onClose }: CharacterModalProps) {
  return (
    <div
      className="character-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${character.name} details`}
    >
      <div className="character-modal">
        {/* Close button */}
        <button
          className="character-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          {'\u2715'}
        </button>

        <div className="character-modal__layout">
          {/* Media column */}
          <div className="character-modal__media">
            {character.video ? (
              <video
                className="character-modal__video"
                src={character.video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : character.image ? (
              <img
                className="character-modal__image"
                src={character.image}
                alt={character.name}
              />
            ) : (
              <div
                className={`character-modal__placeholder character-card__placeholder--${character.kingdom}`}
              >
                {kingdomEmoji[character.kingdom] || '\uD83C\uDF44'}
              </div>
            )}
          </div>

          {/* Info column */}
          <div className="character-modal__info">
            <div className="character-modal__header">
              <h2 className="character-modal__name">{character.name}</h2>
              <p className="character-modal__species">{character.species}</p>
              <div className="character-modal__badges">
                <span
                  className={`character-card__kingdom-badge character-card__kingdom-badge--${character.kingdom}`}
                >
                  {kingdomLabel[character.kingdom] || character.kingdom}
                </span>
                <span title={character.alignment}>
                  {alignmentIcon[character.alignment] || ''}{' '}
                  {character.alignment.charAt(0).toUpperCase() +
                    character.alignment.slice(1)}
                </span>
              </div>
            </div>

            {/* Backstory */}
            {character.backstory && (
              <div className="character-modal__section">
                <h4 className="character-modal__section-title">Backstory</h4>
                <p className="character-modal__backstory">
                  {character.backstory}
                </p>
              </div>
            )}

            {/* Teaches */}
            {character.teaches && character.teaches.length > 0 && (
              <div className="character-modal__section">
                <h4 className="character-modal__section-title">Teaches</h4>
                <ul className="character-modal__teaches-list">
                  {character.teaches.map((topic, idx) => (
                    <li key={idx} className="character-modal__teaches-item">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Relationships */}
            {character.relationships && character.relationships.length > 0 && (
              <div className="character-modal__section">
                <h4 className="character-modal__section-title">
                  Relationships
                </h4>
                <div className="character-modal__relationships-list">
                  {character.relationships.map((rel, idx) => (
                    <div key={idx} className="character-modal__relationship">
                      <span className="character-modal__relationship-name">
                        {rel.character}
                      </span>
                      <span className="character-modal__relationship-type">
                        {rel.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
