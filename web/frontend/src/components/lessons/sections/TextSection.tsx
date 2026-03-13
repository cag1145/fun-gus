import { ReactNode } from 'react';
import './sections.css';

interface TextContent {
  title: string;
  body: string;
}

interface TextSectionProps {
  content: TextContent;
}

/**
 * Parse inline formatting: **bold**, *italic*, `code`
 */
function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      // **bold**
      parts.push(
        <strong key={key++} className="section-text__bold">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // *italic*
      parts.push(
        <em key={key++} className="section-text__italic">
          {match[3]}
        </em>
      );
    } else if (match[4]) {
      // `code`
      parts.push(
        <code key={key++} className="section-text__code">
          {match[4]}
        </code>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

/**
 * Parse body text into paragraphs and bullet lists.
 * Split by \n\n for paragraphs. Lines starting with "- " become bullet lists.
 */
function parseBody(body: string): ReactNode[] {
  const blocks = body.split('\n\n');
  const elements: ReactNode[] = [];

  blocks.forEach((block, blockIndex) => {
    const lines = block.split('\n');
    const bulletLines = lines.filter((line) => line.trimStart().startsWith('- '));

    if (bulletLines.length > 0 && bulletLines.length === lines.length) {
      // All lines are bullets — render as a list
      elements.push(
        <ul key={blockIndex} className="section-text__list">
          {bulletLines.map((line, lineIndex) => (
            <li key={lineIndex} className="section-text__list-item">
              <span>{parseInline(line.trimStart().slice(2))}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      // Mixed or plain paragraph
      const nonBulletLines: string[] = [];
      const pendingBullets: string[] = [];

      lines.forEach((line, lineIndex) => {
        if (line.trimStart().startsWith('- ')) {
          // Flush paragraph text first
          if (nonBulletLines.length > 0) {
            elements.push(
              <p
                key={`${blockIndex}-p-${lineIndex}`}
                className="section-text__paragraph"
              >
                {parseInline(nonBulletLines.join(' '))}
              </p>
            );
            nonBulletLines.length = 0;
          }
          pendingBullets.push(line.trimStart().slice(2));
        } else {
          // Flush bullets first
          if (pendingBullets.length > 0) {
            elements.push(
              <ul
                key={`${blockIndex}-ul-${lineIndex}`}
                className="section-text__list"
              >
                {pendingBullets.map((bullet, bi) => (
                  <li key={bi} className="section-text__list-item">
                    <span>{parseInline(bullet)}</span>
                  </li>
                ))}
              </ul>
            );
            pendingBullets.length = 0;
          }
          nonBulletLines.push(line);
        }
      });

      // Flush remaining
      if (nonBulletLines.length > 0) {
        elements.push(
          <p
            key={`${blockIndex}-final-p`}
            className="section-text__paragraph"
          >
            {parseInline(nonBulletLines.join(' '))}
          </p>
        );
      }
      if (pendingBullets.length > 0) {
        elements.push(
          <ul key={`${blockIndex}-final-ul`} className="section-text__list">
            {pendingBullets.map((bullet, bi) => (
              <li key={bi} className="section-text__list-item">
                <span>{parseInline(bullet)}</span>
              </li>
            ))}
          </ul>
        );
      }
    }
  });

  return elements;
}

function TextSection({ content }: TextSectionProps) {
  return (
    <section className="section section-text">
      <h2 className="section-text__title">{content.title}</h2>
      <div className="section-text__body">{parseBody(content.body)}</div>
    </section>
  );
}

export default TextSection;
export type { TextContent };
