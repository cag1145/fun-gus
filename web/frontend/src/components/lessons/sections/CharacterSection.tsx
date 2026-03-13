import { Link } from 'react-router-dom';
import './sections.css';

interface CharacterContent {
  characterId: string;
  name: string;
  species: string;
  kingdom: string;
  description: string;
  teaches: string[];
  image?: string;
}

interface CharacterSectionProps {
  content: CharacterContent;
}

function getKingdomClass(kingdom: string): string {
  const normalized = kingdom.toLowerCase();
  if (normalized === 'fungi') return 'section-character__kingdom--fungi';
  if (normalized === 'bacteria') return 'section-character__kingdom--bacteria';
  if (normalized === 'insects') return 'section-character__kingdom--insects';
  return 'section-character__kingdom--fungi';
}

function getPlaceholderEmoji(kingdom: string): string {
  const normalized = kingdom.toLowerCase();
  if (normalized === 'fungi') return '\uD83C\uDF44';
  if (normalized === 'bacteria') return '\uD83E\uDDA0';
  if (normalized === 'insects') return '\uD83D\uDC1B';
  return '\uD83C\uDF44';
}

function CharacterSection({ content }: CharacterSectionProps) {
  const kingdomClass = getKingdomClass(content.kingdom);

  return (
    <section className="section section-character">
      <div className="section-character__image-wrapper">
        {content.image ? (
          <img
            className="section-character__image"
            src={content.image}
            alt={content.name}
            loading="lazy"
          />
        ) : (
          <div className="section-character__placeholder">
            {getPlaceholderEmoji(content.kingdom)}
          </div>
        )}
      </div>

      <div className="section-character__info">
        <div className="section-character__header">
          <h3 className="section-character__name">{content.name}</h3>
          <span className={`section-character__kingdom ${kingdomClass}`}>
            {content.kingdom}
          </span>
        </div>

        <p className="section-character__species">{content.species}</p>
        <p className="section-character__description">{content.description}</p>

        {content.teaches.length > 0 && (
          <div>
            <div className="section-character__teaches-label">Teaches</div>
            <div className="section-character__teaches-list">
              {content.teaches.map((topic, index) => (
                <span key={index} className="section-character__teaches-tag">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          to={`/characters?id=${content.characterId}`}
          className="section-character__link"
        >
          View in Character Explorer {'\u2192'}
        </Link>
      </div>
    </section>
  );
}

export default CharacterSection;
export type { CharacterContent };
