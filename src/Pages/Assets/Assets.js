import React, { useState } from 'react';
import './Assets.css';

const Assets = () => {
  const [selectedFilter, setSelectedFilter] = useState('Image');

  const assetsData = [
    {
      fileName: 'offer_banner.png',
      size: '1.2 MB',
      uploadedOn: '20 Jun 2025',
      usedIn: '2 Campaigns',
      assetType: 'Image'
    },
    {
      fileName: 'logo_white.jpg',
      size: '950 KB',
      uploadedOn: '15 May 2024',
      usedIn: '3 Campaigns',
      assetType: 'Image'
    },
    {
      fileName: 'product_shot.png',
      size: '2.1 MB',
      uploadedOn: '18 Jun 2025',
      usedIn: '1 Campaign',
      assetType: 'Image'
    },
    {
      fileName: 'hero_image.jpg',
      size: '1.8 MB',
      uploadedOn: '12 Jun 2025',
      usedIn: '4 Campaigns',
      assetType: 'Image'
    },
    {
      fileName: 'icon_set.png',
      size: '750 KB',
      uploadedOn: '10 Jun 2025',
      usedIn: '2 Campaigns',
      assetType: 'Image'
    },
    {
      fileName: 'background.jpg',
      size: '3.2 MB',
      uploadedOn: '08 Jun 2025',
      usedIn: '1 Campaign',
      assetType: 'Image'
    },
    {
      fileName: 'banner_ads.png',
      size: '1.5 MB',
      uploadedOn: '05 Jun 2025',
      usedIn: '3 Campaigns',
      assetType: 'Image'
    },
    {
      fileName: 'thumbnail.jpg',
      size: '680 KB',
      uploadedOn: '03 Jun 2025',
      usedIn: '2 Campaigns',
      assetType: 'Image'
    }
  ];

  const filterOptions = [
    { name: 'Image', icon: 'fas fa-image' },
    { name: 'GIF', icon: 'fas fa-file-image' },
    { name: 'Video', icon: 'fas fa-play' },
    { name: 'PDF', icon: 'fas fa-file-pdf' },
    { name: 'Audio', icon: 'fas fa-music' }
  ];

  return (
    <div className="assets-container">
      {/* Topbar */}
      <div className="assets-topbar">
        <div className="assets-title">Assets</div>
      </div>
      
      <div className="assets-content">
        {/* Asset Type Filters */}
        <div className="assets-filters">
          {filterOptions.map((filter) => (
            <button
              key={filter.name}
              className={`filter-btn ${selectedFilter === filter.name ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.name)}
            >
              <i className={filter.icon}></i>
              {filter.name}
            </button>
          ))}
          <button className="add-btn">
            <i className="fas fa-plus"></i>
            Add
          </button>
        </div>

        {/* Assets Table */}
        <div className="assets-table-wrapper">
          <table className="assets-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Uploaded On</th>
                <th>Used In</th>
                <th>Assets Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assetsData.map((asset, index) => (
                <tr key={index}>
                  <td className="file-name">
                    <a href="#">{asset.fileName}</a>
                  </td>
                  <td>{asset.size}</td>
                  <td>{asset.uploadedOn}</td>
                  <td>{asset.usedIn}</td>
                  <td>{asset.assetType}</td>
                  <td>
                    <button className="delete-btn">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
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