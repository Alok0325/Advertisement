import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/' && location.pathname === '/');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">LOGO</div>
      <nav className="sidebar-nav">
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/" className="nav-link">
              <span className="icon">📊</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={isActive('/livechat') ? 'active' : ''}>
            <Link to="/livechat" className="nav-link">
              <span className="icon">💬</span>
              <span>Live Chat</span>
            </Link>
          </li>
          <li className={isActive('/contacts') ? 'active' : ''}>
            <Link to="/contacts" className="nav-link">
              <span className="icon">👥</span>
              <span>Contacts</span>
            </Link>
          </li>
          <li className={isActive('/history') ? 'active' : ''}>
            <Link to="/history" className="nav-link">
              <span className="icon">🕑</span>
              <span>History</span>
            </Link>
          </li>
          <li className={isActive('/assets') ? 'active' : ''}>
            <Link to="/assets" className="nav-link">
              <span className="icon">🗃️</span>
              <span>Assets</span>
            </Link>
          </li>
          <li className={isActive('/tagsetting') ? 'active' : ''}>
            <Link to="/tagsetting" className="nav-link">
              <span className="icon">⚙️</span>
              <span>Tag Setting</span>
            </Link>
          </li>
          <li className={isActive('/billing') ? 'active' : ''}>
            <Link to="/billing" className="nav-link">
              <span className="icon">💳</span>
              <span>Billing</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
