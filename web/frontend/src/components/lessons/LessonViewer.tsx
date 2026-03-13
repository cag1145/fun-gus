import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumApi, type LessonFull, type LessonSection } from '../../api/client';
import { useProgressStore } from '../../stores/progressStore';
import './LessonViewer.css';

/* Section components */
import HeroSection from './sections/HeroSection';
import TextSection from './sections/TextSection';
import LoreSection from './sections/LoreSection';
import FactSection from './sections/FactSection';
import CharacterSection from './sections/CharacterSection';
import QuizSection from './sections/QuizSection';
import ComparisonSection from './sections/ComparisonSection';
import ActivitySection from './sections/ActivitySection';
import GlossarySection from './sections/GlossarySection';
import SummarySection from './sections/SummarySection';
import ImageSection from './sections/ImageSection';

/* ------------------------------------------------------------------ */
/*  Section Renderer                                                   */
/* ------------------------------------------------------------------ */

function SectionRenderer({ section }: { section: LessonSection }) {
  switch (section.type) {
    case 'hero':
      return <HeroSection content={section.content} />;
    case 'text':
      return <TextSection content={section.content} />;
    case 'lore':
      return <LoreSection content={section.content} />;
    case 'fact':
      return <FactSection content={section.content} />;
    case 'character':
      return <CharacterSection content={section.content} />;
    case 'quiz':
      return <QuizSection content={section.content} />;
    case 'comparison':
      return <ComparisonSection content={section.content} />;
    case 'activity':
      return <ActivitySection content={section.content} />;
    case 'glossary':
      return <GlossarySection content={section.content} />;
    case 'summary':
      return <SummarySection content={section.content} />;
    case 'image':
      return <ImageSection content={section.content} />;
    default:
      return (
        <div className="lesson-viewer__unknown-section">
          Unknown section type: {section.type}
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  LessonViewer Component                                             */
/* ------------------------------------------------------------------ */

type ViewMode = 'paginated' | 'scroll';

function LessonViewer() {
  const { lessonId } = useParams<{ trackId: string; lessonId: string }>();

  const [lesson, setLesson] = useState<LessonFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('paginated');
  const [currentSection, setCurrentSection] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const {
    getLessonProgress,
    updateSectionProgress,
    markSectionComplete,
    markLessonComplete,
  } = useProgressStore();

  /* Fetch lesson data */
  useEffect(() => {
    if (!lessonId) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    curriculumApi
      .getLesson(lessonId)
      .then((data) => {
        if (cancelled) return;
        setLesson(data);

        /* Restore last position from store */
        const saved = getLessonProgress(lessonId);
        if (saved && saved.currentSection < data.sections.length) {
          setCurrentSection(saved.currentSection);
        } else {
          setCurrentSection(0);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || 'Failed to load lesson');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // getLessonProgress is stable from zustand
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  /* Persist current section whenever it changes */
  useEffect(() => {
    if (lessonId && lesson) {
      updateSectionProgress(lessonId, currentSection);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, lessonId]);

  /* Computed values */
  const progress = getLessonProgress(lessonId || '');
  const completedSections = new Set(progress?.completedSections || []);
  const totalSections = lesson?.sections.length || 0;
  const isLastSection = currentSection === totalSections - 1;
  const progressPercent =
    totalSections > 0
      ? Math.round((completedSections.size / totalSections) * 100)
      : 0;

  /* Navigation handlers */
  const goToSection = useCallback(
    (index: number) => {
      if (!lesson) return;
      if (index < 0 || index >= lesson.sections.length) return;
      setCurrentSection(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lesson]
  );

  const goBack = useCallback(() => {
    goToSection(currentSection - 1);
  }, [currentSection, goToSection]);

  const goNext = useCallback(() => {
    if (!lessonId || !lesson) return;

    /* Mark current section complete */
    markSectionComplete(lessonId, currentSection);

    if (isLastSection) {
      /* All done -- mark lesson complete */
      markLessonComplete(lessonId);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    } else {
      goToSection(currentSection + 1);
    }
  }, [
    lessonId,
    lesson,
    currentSection,
    isLastSection,
    markSectionComplete,
    markLessonComplete,
    goToSection,
  ]);

  /* ---------------------------------------------------------------- */
  /*  Loading State                                                    */
  /* ---------------------------------------------------------------- */

  if (loading) {
    return (
      <div className="lesson-viewer lesson-viewer--loading">
        <div className="lesson-viewer__skeleton-header skeleton" />
        <div className="lesson-viewer__skeleton-bar skeleton" />
        <div className="lesson-viewer__skeleton-body skeleton" />
        <div className="lesson-viewer__skeleton-body skeleton" />
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="lesson-viewer lesson-viewer--error">
        <p className="lesson-viewer__error-text">
          {error || 'Lesson not found.'}
        </p>
        <Link to="/lessons" className="btn btn-secondary">
          Back to Lessons
        </Link>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Main Render                                                      */
  /* ---------------------------------------------------------------- */

  return (
    <div
      className={`lesson-viewer ${showCelebration ? 'lesson-viewer--celebration' : ''}`}
    >
      {/* Header */}
      <header className="lesson-viewer__header">
        <div className="lesson-viewer__header-top">
          <Link to="/lessons" className="lesson-viewer__back-link">
            {'\u2190'} Back to Lessons
          </Link>
          <div className="lesson-viewer__view-toggle">
            <button
              className={`lesson-viewer__toggle-btn ${viewMode === 'paginated' ? 'lesson-viewer__toggle-btn--active' : ''}`}
              onClick={() => setViewMode('paginated')}
              type="button"
            >
              {'\u25A2'} Paginated
            </button>
            <button
              className={`lesson-viewer__toggle-btn ${viewMode === 'scroll' ? 'lesson-viewer__toggle-btn--active' : ''}`}
              onClick={() => setViewMode('scroll')}
              type="button"
            >
              {'\u2630'} Scroll
            </button>
          </div>
        </div>

        <h1 className="lesson-viewer__title">{lesson.title}</h1>

        <div className="lesson-viewer__progress-bar">
          <div
            className="lesson-viewer__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="lesson-viewer__progress-label">
          {progressPercent}% complete
        </span>
      </header>

      {/* Content */}
      <main className="lesson-viewer__content">
        {viewMode === 'paginated' ? (
          <div className="lesson-viewer__section animate-fade-in" key={currentSection}>
            <SectionRenderer section={lesson.sections[currentSection]} />
          </div>
        ) : (
          lesson.sections.map((section, i) => (
            <div className="lesson-viewer__section" key={i}>
              <SectionRenderer section={section} />
            </div>
          ))
        )}
      </main>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="lesson-viewer__celebration-overlay">
          <div className="lesson-viewer__celebration-card">
            <span className="lesson-viewer__celebration-icon">{'\u2713'}</span>
            <h2 className="lesson-viewer__celebration-title">
              Lesson Complete!
            </h2>
            <p className="lesson-viewer__celebration-text">
              Great work finishing <strong>{lesson.title}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Footer Navigation (paginated mode only) */}
      {viewMode === 'paginated' && (
        <footer className="lesson-viewer__nav">
          <button
            className="btn btn-ghost lesson-viewer__nav-btn"
            disabled={currentSection === 0}
            onClick={goBack}
            type="button"
          >
            {'\u2190'} Previous
          </button>

          <div className="lesson-viewer__dots">
            {lesson.sections.map((_, i) => (
              <button
                key={i}
                className={`lesson-viewer__dot ${i === currentSection ? 'lesson-viewer__dot--active' : ''} ${completedSections.has(i) ? 'lesson-viewer__dot--completed' : ''}`}
                onClick={() => goToSection(i)}
                type="button"
                aria-label={`Go to section ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={`btn lesson-viewer__nav-btn ${isLastSection ? 'btn-primary' : 'btn-secondary'}`}
            onClick={goNext}
            type="button"
          >
            {isLastSection ? '\u2713 Complete' : 'Continue \u2192'}
          </button>
        </footer>
      )}
    </div>
  );
}

export default LessonViewer;
