import { Link } from 'react-router-dom';
import './Home.css';

const featureCards = [
  {
    emoji: '\uD83C\uDF44',
    title: '34+ Characters',
    description:
      'Meet fungi, bacteria, and insects who protect the underground network',
  },
  {
    emoji: '\uD83D\uDCDA',
    title: '8 Lessons',
    description: 'Real mycology wrapped in adventure',
  },
  {
    emoji: '\u2728',
    title: 'Lore Archive',
    description: 'Explore the world of SILLIUM',
  },
  {
    emoji: '\uD83D\uDD78\uFE0F',
    title: 'Network Map',
    description: 'See how every organism connects',
  },
];

function Home() {
  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">The Forest Has WiFi</h1>
          <p className="hero-subtitle">
            Nature invented the internet 450 million years before humans
          </p>

          <div className="hero-video-wrapper">
            <video
              className="hero-video"
              controls
              poster="/characters/fungal-forest.webp"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Link to="/dashboard" className="hero-cta">
            Enter SILLIUM {'\u2192'}
          </Link>
        </div>
      </section>

      {/* ===== Feature Cards Section ===== */}
      <section className="features">
        <div className="features-grid">
          {featureCards.map((card) => (
            <div className="feature-card" key={card.title}>
              <span className="feature-card-emoji">{card.emoji}</span>
              <h3 className="feature-card-title">{card.title}</h3>
              <p className="feature-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <h2 className="about-title">What is Fun-Gus?</h2>
        <p className="about-text">
          A transmedia children's universe that humanizes fungal networks through
          memorable characters. Fun-Gus brings the hidden world beneath the
          forest floor to life -- where mycorrhizal networks carry messages,
          nutrients flow like data packets, and every organism plays a vital role
          in the ecosystem.
        </p>
        <p className="about-text">
          Through stories, lessons, and interactive exploration, children
          discover that the real internet was invented by nature hundreds of
          millions of years ago.
        </p>
      </section>

      {/* ===== Footer ===== */}
      <footer className="home-footer">
        <p className="home-footer-text">Fun-Gus &copy; 2026</p>
      </footer>
    </div>
  );
}

export default Home;
