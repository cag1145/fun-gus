import './sections.css';

interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  objectives: string[];
  image?: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="section section-hero">
      {content.image && (
        <div
          className="section-hero__bg"
          style={{ backgroundImage: `url(${content.image})` }}
        />
      )}

      <div className="section-hero__content">
        <h1 className="section-hero__title">{content.title}</h1>

        {content.subtitle && (
          <p className="section-hero__subtitle">{content.subtitle}</p>
        )}

        <p className="section-hero__description">{content.description}</p>

        {content.objectives.length > 0 && (
          <div className="section-hero__objectives">
            <span className="section-hero__objectives-heading">
              What You Will Learn
            </span>
            {content.objectives.map((objective, index) => (
              <div key={index} className="section-hero__objective">
                <span>{objective}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
export type { HeroContent };
