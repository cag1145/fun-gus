import { Link } from 'react-router-dom';
import './sections.css';

interface SummaryContent {
  title?: string;
  takeaways: string[];
  nextLesson?: { id: string; title: string };
}

interface SummarySectionProps {
  content: SummaryContent;
}

function SummarySection({ content }: SummarySectionProps) {
  return (
    <section className="section section-summary">
      <h3 className="section-summary__title">
        {content.title || 'Lesson Recap'}
      </h3>

      <div className="section-summary__takeaways">
        {content.takeaways.map((takeaway, index) => (
          <div key={index} className="section-summary__takeaway">
            <span className="section-summary__checkmark">{'\u2713'}</span>
            <span>{takeaway}</span>
          </div>
        ))}
      </div>

      {content.nextLesson && (
        <Link
          to={`/lessons/${content.nextLesson.id}`}
          className="section-summary__next"
        >
          Next: {content.nextLesson.title}
          <span className="section-summary__next-arrow">{'\u2192'}</span>
        </Link>
      )}
    </section>
  );
}

export default SummarySection;
export type { SummaryContent };
