import './sections.css';

interface ImageContent {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageSectionProps {
  content: ImageContent;
}

function ImageSection({ content }: ImageSectionProps) {
  return (
    <section className="section section-image">
      <div className="section-image__wrapper">
        <img
          className="section-image__img"
          src={content.src}
          alt={content.alt}
          loading="lazy"
        />
      </div>
      {content.caption && (
        <p className="section-image__caption">{content.caption}</p>
      )}
    </section>
  );
}

export default ImageSection;
export type { ImageContent };
