import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { curriculumApi, type Track } from '../../api/client';
import { useProgressStore } from '../../stores/progressStore';
import './Lessons.css';

/* Track accent colors keyed by track id */
const TRACK_COLORS: Record<string, string> = {
  foundations: '#22d3b8',
  connections: '#c084fc',
  ecology: '#22c55e',
  microbiology: '#f5a623',
  survival: '#ef4444',
  deep_time: '#60a5fa',
};

/* Track icons */
const TRACK_ICONS: Record<string, string> = {
  foundations: '\uD83C\uDF44',
  connections: '\uD83D\uDD78\uFE0F',
  ecology: '\uD83C\uDF3F',
  microbiology: '\uD83D\uDD2C',
  survival: '\uD83D\uDEE1\uFE0F',
  deep_time: '\uD83C\uDF0D',
};

function Lessons() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { getLessonProgress, getCompletedSectionCount } = useProgressStore();

  useEffect(() => {
    let cancelled = false;

    curriculumApi
      .getTracks()
      .then((data) => {
        if (!cancelled) setTracks(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || 'Failed to load lessons');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------------------------------------------------------------- */
  /*  Loading State                                                    */
  /* ---------------------------------------------------------------- */

  if (loading) {
    return (
      <div className="lessons lessons--loading">
        <div className="lessons__skeleton-title skeleton" />
        <div className="lessons__skeleton-subtitle skeleton" />
        {[1, 2, 3].map((n) => (
          <div key={n} className="lessons__skeleton-track">
            <div className="lessons__skeleton-track-header skeleton" />
            <div className="lessons__skeleton-cards">
              <div className="lessons__skeleton-card skeleton" />
              <div className="lessons__skeleton-card skeleton" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="lessons lessons--error">
        <p className="lessons__error-text">{error}</p>
        <button
          className="btn btn-secondary"
          onClick={() => window.location.reload()}
          type="button"
        >
          Retry
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Main Render                                                      */
  /* ---------------------------------------------------------------- */

  return (
    <div className="lessons">
      <header className="lessons__header">
        <h1 className="lessons__title">Lessons</h1>
        <p className="lessons__subtitle">
          Real science wrapped in adventure
        </p>
      </header>

      <div className="lessons__tracks">
        {tracks.map((track) => {
          const color = TRACK_COLORS[track.id] || '#22d3b8';
          const icon = TRACK_ICONS[track.id] || '\uD83C\uDF44';
          const completedCount = track.lessons.filter(
            (l) => getLessonProgress(l.id)?.completed
          ).length;

          return (
            <section
              key={track.id}
              className="lessons__track"
              style={{ borderLeftColor: color }}
            >
              <div className="lessons__track-header">
                <h2 className="lessons__track-title" style={{ color }}>
                  {icon} {track.title}
                </h2>
                <span className="lessons__track-progress">
                  {completedCount} of {track.lessons.length} complete
                </span>
              </div>

              <div className="lessons__track-lessons">
                {track.lessons.map((lesson) => {
                  const progress = getLessonProgress(lesson.id);
                  const isComplete = progress?.completed || false;
                  const completedSections = getCompletedSectionCount(lesson.id);
                  const sectionPercent =
                    lesson.sectionCount > 0
                      ? Math.round(
                          (completedSections / lesson.sectionCount) * 100
                        )
                      : 0;

                  return (
                    <Link
                      key={lesson.id}
                      to={`/lessons/${track.id}/${lesson.id}`}
                      className={`lessons__card ${isComplete ? 'lessons__card--complete' : ''}`}
                    >
                      {isComplete && (
                        <span className="lessons__card-badge">
                          {'\u2713'}
                        </span>
                      )}

                      <h3 className="lessons__card-title">{lesson.title}</h3>
                      <p className="lessons__card-description">
                        {lesson.description}
                      </p>

                      <div className="lessons__card-meta">
                        <span className="lessons__card-meta-item">
                          {'\u23F1'} {lesson.duration}
                        </span>
                        <span className="lessons__card-meta-item">
                          {'\uD83D\uDCD6'} {lesson.sectionCount} sections
                        </span>
                      </div>

                      <div className="lessons__card-progress-bar">
                        <div
                          className="lessons__card-progress-fill"
                          style={{ width: `${sectionPercent}%` }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Lessons;
