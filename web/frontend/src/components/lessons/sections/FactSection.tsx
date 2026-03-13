import './sections.css';

interface FactContent {
  fact: string;
  source?: string;
}

interface FactSectionProps {
  content: FactContent;
}

function FactSection({ content }: FactSectionProps) {
  return (
    <section className="section section-fact">
      <div className="section-fact__header">
        <span className="section-fact__icon">{'\uD83C\uDF44'}</span>
        <span className="section-fact__label">Did You Know?</span>
      </div>
      <p className="section-fact__text">{content.fact}</p>
      {content.source && (
        <span className="section-fact__source">Source: {content.source}</span>
      )}
    </section>
  );
}

export default FactSection;
export type { FactContent };
