import './sections.css';

interface LoreContent {
  title: string;
  body: string;
  source?: string;
}

interface LoreSectionProps {
  content: LoreContent;
}

function LoreSection({ content }: LoreSectionProps) {
  return (
    <section className="section section-lore">
      <div className="section-lore__icon">{'\u2728'}</div>
      <h3 className="section-lore__title">{content.title}</h3>
      <div className="section-lore__body">
        {content.body.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: index < content.body.split('\n\n').length - 1 ? '0.75rem' : 0 }}>
            {paragraph}
          </p>
        ))}
        {content.source && (
          <cite className="section-lore__source">{content.source}</cite>
        )}
      </div>
    </section>
  );
}

export default LoreSection;
export type { LoreContent };
