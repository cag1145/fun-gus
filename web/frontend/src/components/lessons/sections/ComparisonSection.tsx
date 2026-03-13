import './sections.css';

interface ComparisonContent {
  title: string;
  items: Array<{
    label: string;
    points: string[];
    color?: string;
  }>;
}

interface ComparisonSectionProps {
  content: ComparisonContent;
}

function ComparisonSection({ content }: ComparisonSectionProps) {
  return (
    <section className="section section-comparison">
      <h3 className="section-comparison__title">{content.title}</h3>

      <div className="section-comparison__grid">
        {content.items.map((item, index) => (
          <div key={index} className="section-comparison__column">
            <div
              className="section-comparison__column-header"
              style={item.color ? { backgroundColor: item.color } : undefined}
            >
              {item.label}
            </div>
            <div className="section-comparison__column-body">
              {item.points.map((point, pointIndex) => (
                <div key={pointIndex} className="section-comparison__point">
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComparisonSection;
export type { ComparisonContent };
