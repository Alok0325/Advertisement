import React from 'react';
import './Assets.css';

const assetTypes = [
  { label: 'Audio', icon: '🎵' },
  { label: 'Text', icon: '📝' },
  { label: 'Video', icon: '🎥' },
  { label: 'PDF', icon: '📄' },
  { label: 'Emoji', icon: '😊' },
];

const assets = [
  { name: 'offer_banner.png', size: '1.2 MB', date: '20 Jun 2025', used: '2 Campaigns' },
  { name: 'logo_white.jpg', size: '950 KB', date: '15 May 2024', used: '3 Campaigns' },
  { name: 'logo_white.jpg', size: '850 KB', date: '10 Apr 2023', used: '5 Campaigns' },
  { name: 'logo_white.jpg', size: '700 KB', date: '5 March 2022', used: '4 Campaigns' },
  { name: 'offer_banner.png', size: '1.1 MB', date: '1 Feb 2021', used: '6 Campaigns' },
  { name: 'offer_banner.png', size: '1.3 MB', date: '25 Jan 2020', used: '2 Campaigns' },
  { name: 'offer_banner.png', size: '900 KB', date: '10 Dec 2019', used: '3 Campaigns' },
  { name: 'offer_banner.png', size: '750 KB', date: '18 Nov 2018', used: '5 Campaigns' },
];

const Assets = () => {
  return (
    <div className="assets-container">
      {/* Topbar */}
      <div className="assets-topbar">
        <div className="assets-title">Assets</div>
      </div>
      <div className="assets-content">
        {/* Asset Type Tabs and Create Button */}
        <div className="assets-tabs-row">
          <div className="assets-tabs">
            {assetTypes.map((type, idx) => (
              <button key={type.label} className={`assets-tab${idx === 0 ? ' active' : ''}`}>
                <span className="tab-icon">{type.icon}</span> {type.label}
              </button>
            ))}
          </div>
          <button className="assets-create-btn">+ Create New</button>
        </div>
        {/* Search */}
        <div className="assets-search-row">
          <input className="assets-search" type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
        {/* Table */}
        <div className="assets-table-wrapper">
          <table className="assets-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Uploaded On</th>
                <th>Used In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a, idx) => (
                <tr key={idx}>
                  <td className="file-link"><a href="#">{a.name}</a></td>
                  <td>{a.size}</td>
                  <td>{a.date}</td>
                  <td>{a.used}</td>
                  <td><button className="delete-btn">🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assets; 