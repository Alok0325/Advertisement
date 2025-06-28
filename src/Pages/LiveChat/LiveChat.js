import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import './LiveChat.css';

const users = [
  { name: 'Ajay', requests: 10 },
  { name: 'Maya', requests: 5 },
  { name: 'John', requests: 3 },
  { name: 'Sara', requests: 8 },
  { name: 'Liam', requests: 12 },
  { name: 'Emma', requests: 7 },
  { name: 'Noah', requests: 15 },
  { name: 'Olivia', requests: 4 },
  { name: 'Sophia', requests: 9 },
  { name: 'James', requests: 6 },
];

const tabList = [
  { label: 'Requesting (800)', key: 'requesting' },
  { label: 'Active (500)', key: 'active' },
  { label: 'Intervened (50)', key: 'intervened' },
];

export default function LiveChat() {
  const [activeTab, setActiveTab] = useState('requesting');

  return (
    <div className="livechat-page">
      <div className="livechat-container">
        {/* Use Sidebar component */}
        <Sidebar />
        {/* Main Content */}
        <main className="main-content">
          {/* Top Bar */}
          <header className="top-bar">
            <input className="project-name-input" placeholder="Project Name" />
            <select className="template-select"><option>Select Companion Templates</option></select>
            <select className="company-select"><option>Nita Infotech (Selected)</option></select>
            <input className="date-input" type="date" value="2025-06-17" readOnly />
          </header>
          {/* Chat Section */}
          <section className="chat-section">
            {/* User List */}
            <div className="user-list-panel">
              <div className="tabs">
                {tabList.map(tab => (
                  <button
                    key={tab.key}
                    className={`tab${activeTab === tab.key ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <ul className="user-list">
                {users.map((user, idx) => (
                  <li key={user.name} className="user-item">
                    <img className="avatar" src="https://api.dicebear.com/7.x/adventurer/svg?seed=User" alt="avatar" />
                    <div>
                      <div className="user-name">{user.name}</div>
                      <div className="user-status">Requesting ({user.requests})</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Chat Window */}
            <div className="chat-window-panel">
              <div className="chat-header">
                <span>Ajay (+919876543210)</span>
                <div className="chat-actions">
                  <button className="transfer-btn">Transfer To &#9660;</button>
                  <button className="resolve-btn">Resolve</button>
                </div>
              </div>
              <div className="chat-messages">
                <div className="message sent">
                  <div className="message-bubble">What is the best programming language?</div>
                  <div className="message-meta">09.13 · Read</div>
                </div>
                <div className="message received">
                  <div className="message-bubble">There are many programming languages in the market that are used in designing and building websites, various applications and other tasks.</div>
                  <div className="message-meta">09.13 · Read</div>
                </div>
                <div className="message sent">
                  <div className="message-bubble">What is the best programming language?</div>
                  <div className="message-meta">09.13 · Read</div>
                </div>
              </div>
            </div>
            {/* Chat Profile */}
            <div className="chat-profile-panel">
              <div className="profile-header">Chat Profile</div>
              <div className="profile-avatar">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=User" alt="avatar" />
                <div className="profile-name">Ajay</div>
                <div className="profile-phone">+9198765 43210</div>
              </div>
              <div className="profile-status-box">
                <div className="profile-status-row"><span>Status</span><span>Intervened</span></div>
                <div className="profile-status-row"><span>Intervened By</span><span>NITA INFOTECH</span></div>
                <div className="profile-status-row"><span>Template Messages</span><span>0</span></div>
                <div className="profile-status-row"><span>Session Messages</span><span>5</span></div>
                <div className="profile-status-row"><span>Unresolved Queries</span><span>0</span></div>
                <div className="profile-status-row"><span>First Message</span><span>.....</span></div>
                <div className="profile-status-row"><span>WA Conversation</span><span>Active</span></div>
                <div className="profile-status-row"><span>MAU Status</span><span>Active</span></div>
                <div className="profile-status-row"><span>Incoming</span><span>Allowed</span></div>
                <div className="profile-status-row"><span>Opted In</span><span><input type="checkbox" checked readOnly /></span></div>
              </div>
              <div className="profile-tags">
                <select><option>Tags</option></select>
              </div>
              <button className="block-btn">Block Incoming Message</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
