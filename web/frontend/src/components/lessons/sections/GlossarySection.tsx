import './sections.css';

interface GlossaryContent {
  title?: string;
  terms: Array<{
    term: string;
    definition: string;
    pronunciation?: string;
  }>;
}

interface GlossarySectionProps {
  content: GlossaryContent;
}

function GlossarySection({ content }: GlossarySectionProps) {
  return (
    <section className="section section-glossary">
      <h3 className="section-glossary__title">
        <span className="section-glossary__title-icon">{'\uD83D\uDCD6'}</span>
        {content.title || 'Vocabulary'}
      </h3>

      <div className="section-glossary__list">
        {content.terms.map((entry, index) => (
          <div key={index} className="section-glossary__item">
            <div className="section-glossary__term-row">
              <span className="section-glossary__term">{entry.term}</span>
              {entry.pronunciation && (
                <span className="section-glossary__pronunciation">
                  ({entry.pronunciation})
                </span>
              )}
            </div>
            <p className="section-glossary__definition">{entry.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GlossarySection;
export type { GlossaryContent };
