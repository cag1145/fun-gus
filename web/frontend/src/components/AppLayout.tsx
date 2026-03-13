import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: '/dashboard', icon: '\u25C8', label: 'Dashboard' },
    { to: '/characters', icon: '\u2726', label: 'Characters' },
    { to: '/lessons', icon: '\u25B6', label: 'Lessons' },
    { to: '/lore', icon: '\u273F', label: 'Lore Archive' },
    { to: '/network', icon: '\u25CE', label: 'Network Map' },
  ];

  return (
    <div className="app-layout">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="sidebar-logo-icon" role="img" aria-label="mushroom">
              {'\uD83C\uDF44'}
            </span>
            <span className="sidebar-logo-text">FUN-GUS</span>
          </div>
          <p className="sidebar-tagline">The Forest Has WiFi</p>
        </div>

        <nav className="sidebar-nav">
          <span className="sidebar-nav-label">EXPLORE</span>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-nav-link ${isActive ? 'sidebar-nav-link--active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <span className="sidebar-nav-text">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="sidebar-footer-text">Powered by SILLIUM</span>
        </div>
      </aside>

      <div className="main-wrapper">
        <header className="top-bar">
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          <div className="top-bar-right">
            {/* Progress indicator placeholder */}
          </div>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
