import { useState } from 'react';
import './sections.css';

interface QuizContent {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizSectionProps {
  content: QuizContent;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function QuizSection({ content }: QuizSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const isCorrect = selectedIndex === content.correctIndex;

  function handleSelect(index: number) {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
  }

  function handleRetry() {
    setSelectedIndex(null);
    setAnswered(false);
  }

  function getOptionClass(index: number): string {
    const base = 'section-quiz__option';
    if (!answered) return base;
    if (index === content.correctIndex) return `${base} ${base}--correct`;
    if (index === selectedIndex) return `${base} ${base}--incorrect`;
    return base;
  }

  return (
    <section
      className={`section section-quiz ${answered && isCorrect ? 'section-quiz__celebration' : ''}`}
    >
      <div className="section-quiz__label">Quick Check</div>
      <h3 className="section-quiz__question">{content.question}</h3>

      <div className="section-quiz__options">
        {content.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleSelect(index)}
            disabled={answered}
            type="button"
          >
            <span className="section-quiz__option-letter">
              {OPTION_LETTERS[index] || String(index + 1)}
            </span>
            <span>{option}</span>
          </button>
        ))}
      </div>

      {answered && (
        <div
          className={`section-quiz__explanation ${
            !isCorrect ? 'section-quiz__explanation--incorrect' : ''
          }`}
        >
          {isCorrect ? (
            <strong>{'\u2705'} Correct! </strong>
          ) : (
            <strong>{'\u274C'} Not quite. </strong>
          )}
          {content.explanation}
        </div>
      )}

      {answered && !isCorrect && (
        <button
          className="btn btn-secondary btn-sm section-quiz__retry"
          onClick={handleRetry}
          type="button"
        >
          Try Again
        </button>
      )}
    </section>
  );
}

export default QuizSection;
export type { QuizContent };
