import './sections.css';

interface ActivityContent {
  title: string;
  description: string;
  materials?: string[];
  steps: string[];
  safetyNote?: string;
}

interface ActivitySectionProps {
  content: ActivityContent;
}

function ActivitySection({ content }: ActivitySectionProps) {
  return (
    <section className="section section-activity">
      <div className="section-activity__header">
        <span className="section-activity__icon">{'\uD83D\uDD2C'}</span>
        <span className="section-activity__label">Try This At Home!</span>
      </div>

      <h3 className="section-activity__title">{content.title}</h3>
      <p className="section-activity__description">{content.description}</p>

      {content.materials && content.materials.length > 0 && (
        <div className="section-activity__materials">
          <div className="section-activity__materials-heading">
            Materials Needed
          </div>
          <div className="section-activity__materials-list">
            {content.materials.map((material, index) => (
              <span key={index} className="section-activity__material">
                {material}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="section-activity__steps">
        {content.steps.map((step, index) => (
          <div key={index} className="section-activity__step">
            <span className="section-activity__step-number">{index + 1}</span>
            <span className="section-activity__step-text">{step}</span>
          </div>
        ))}
      </div>

      {content.safetyNote && (
        <div className="section-activity__safety">
          <span className="section-activity__safety-icon">{'\u26A0\uFE0F'}</span>
          <span className="section-activity__safety-text">
            {content.safetyNote}
          </span>
        </div>
      )}
    </section>
  );
}

export default ActivitySection;
export type { ActivityContent };
