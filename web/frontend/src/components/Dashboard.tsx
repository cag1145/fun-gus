import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '../stores/progressStore';
import { characterApi, curriculumApi } from '../api/client';
import type { CharacterSummary, Track } from '../api/client';
import './Dashboard.css';

/* ---------- Track metadata for colors ---------- */
const TRACK_META: Record<string, { label: string; color: string }> = {
  foundations: { label: 'Foundations', color: '#22d3b8' },
  connections: { label: 'Connections', color: '#c084fc' },
  ecology: { label: 'Ecology', color: '#22c55e' },
  microbiology: { label: 'Microbiology', color: '#f5a623' },
  survival: { label: 'Survival', color: '#ef4444' },
  deep_time: { label: 'Deep Time', color: '#60a5fa' },
};

/* ---------- Quick link data ---------- */
const quickLinks = [
  {
    to: '/characters',
    icon: '\u2726',
    title: 'Characters',
    description: 'Meet the fungi, bacteria, and insects of SILLIUM',
  },
  {
    to: '/lessons',
    icon: '\u25B6',
    title: 'Lessons',
    description: 'Real mycology wrapped in adventure',
  },
  {
    to: '/lore',
    icon: '\u273F',
    title: 'Lore Archive',
    description: 'Stories, secrets, and science of the underground',
  },
  {
    to: '/network',
    icon: '\u25CE',
    title: 'Network Map',
    description: 'See how every organism connects',
  },
];

function Dashboard() {
  const getTotalStats = useProgressStore((s) => s.getTotalStats);
  const getCompletedLessons = useProgressStore((s) => s.getCompletedLessons);

  const [tracks, setTracks] = useState<Track[]>([]);
  const [featured, setFeatured] = useState<CharacterSummary | null>(null);

  const stats = getTotalStats();
  const completedLessonIds = getCompletedLessons();

  /* Fetch tracks + random character */
  useEffect(() => {
    curriculumApi.getTracks().then(setTracks).catch(() => {});

    characterApi
      .list()
      .then((chars) => {
        if (chars.length > 0) {
          const idx = Math.floor(Math.random() * chars.length);
          setFeatured(chars[idx]);
        }
      })
      .catch(() => {});
  }, []);

  /* Count lessons completed per track */
  const trackProgress = (trackId: string): number => {
    const track = tracks.find((t) => t.id === trackId);
    if (!track) return 0;
    return track.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
  };

  /* Total lesson count */
  const totalLessons = tracks.reduce((sum, t) => sum + t.lessons.length, 0);

  return (
    <div className="dashboard">
      {/* ===== Hero ===== */}
      <div className="dashboard-hero">
        <h1>Welcome to SILLIUM</h1>
        <p className="tagline">The underground network where all life connects</p>
      </div>

      {/* ===== Stats Grid ===== */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon" role="img" aria-label="mushroom">
            {'\uD83C\uDF44'}
          </span>
          <span className="stat-number">
            {stats.lessonsCompleted} / {totalLessons || 8}
          </span>
          <span className="stat-label">Lessons Completed</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon" role="img" aria-label="book">
            {'\uD83D\uDCD6'}
          </span>
          <span className="stat-number">{stats.sectionsCompleted}</span>
          <span className="stat-label">Sections Completed</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon" role="img" aria-label="people">
            {'\uD83D\uDC65'}
          </span>
          <span className="stat-number">{stats.charactersViewed}</span>
          <span className="stat-label">Characters Viewed</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon" role="img" aria-label="plant">
            {'\uD83C\uDF3F'}
          </span>
          <span className="stat-number">{stats.charactersViewed}</span>
          <span className="stat-label">Species Discovered</span>
        </div>
      </div>

      {/* ===== Dashboard Sections ===== */}
      <div className="dashboard-sections">
        {/* Quick Links */}
        <section className="quick-links">
          <h2>Continue Exploring</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="quick-link-card">
                <span className="quick-link-icon">{link.icon}</span>
                <h3 className="quick-link-title">{link.title}</h3>
                <p className="quick-link-desc">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learning Tracks */}
        <section className="track-progress">
          <h2>Learning Tracks</h2>
          <div className="tracks-list">
            {tracks.map((track) => {
              const meta = TRACK_META[track.id] || {
                label: track.title,
                color: '#22d3b8',
              };
              const done = trackProgress(track.id);
              const total = track.lessons.length;
              const pct = total > 0 ? (done / total) * 100 : 0;

              return (
                <div className="track-item" key={track.id}>
                  <div className="track-info">
                    <span
                      className="track-dot"
                      style={{ backgroundColor: meta.color }}
                    />
                    <span className="track-name">{meta.label}</span>
                    <span className="track-count">
                      {done} / {total}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${meta.color}, ${meta.color}cc)`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Character */}
        {featured && (
          <section className="featured-character">
            <h2>Featured Character</h2>
            <div className="featured-card">
              <div className="featured-image-wrapper">
                {featured.image ? (
                  <img
                    className="featured-image"
                    src={featured.image}
                    alt={featured.name}
                    loading="lazy"
                  />
                ) : (
                  <div className="featured-placeholder">
                    {featured.kingdom === 'fungi'
                      ? '\uD83C\uDF44'
                      : featured.kingdom === 'bacteria'
                        ? '\uD83E\uDDA0'
                        : '\uD83D\uDC1B'}
                  </div>
                )}
              </div>
              <div className="featured-info">
                <h3 className="featured-name">{featured.name}</h3>
                <p className="featured-species">{featured.species}</p>
                <span
                  className={`badge badge-${featured.kingdom}`}
                  style={{ marginBottom: '0.5rem' }}
                >
                  {featured.kingdom.charAt(0).toUpperCase() +
                    featured.kingdom.slice(1)}
                </span>
                <p className="featured-personality">{featured.personality}</p>
                <Link to="/characters" className="featured-link">
                  Meet them {'\u2192'}
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
