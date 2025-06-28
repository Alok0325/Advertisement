import React from 'react';
import './TagSetting.css';

const tags = [
  { name: 'Ecommerce', color: 'red', category: 'Promotion' },
  { name: 'Message', color: 'green', category: 'Discount' },
  { name: 'Testing', color: 'green', category: 'Flash Sale' },
  { name: 'Digital Board', color: 'blue', category: 'Bundle Offer' },
  { name: 'Website Development', color: 'green', category: 'Loyalty Program' },
  { name: 'Ads', color: 'green', category: 'Seasonal Sale' },
  { name: 'Digital Marketing', color: 'blue', category: 'Free Shipping' },
  { name: 'Ecommerce', color: 'orange', category: 'Referral Bonus' },
];

const TagSetting = () => {
  return (
    <div className="tagsetting-container">
      
      {/* Topbar */}
      <div className="tagsetting-topbar">
        <div className="tagsetting-topbar-left">Tag Setting</div>
        <input className="tagsetting-search" type="text" placeholder="Search" />
        <select className="tagsetting-select"><option>All</option></select>
        <button className="tagsetting-create-btn">+ Create New</button>
      </div>
      {/* Table */}
      <div className="tagsetting-table-wrapper">
        <table className="tagsetting-table">
          <thead>
            <tr>
              <th>Tag Name</th>
              <th>Category</th>
              <th>First Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag, idx) => (
              <tr key={idx}>
                <td><span className={`tag-badge ${tag.color}`}>{tag.name}</span></td>
                <td>{tag.category}</td>
                <td>-</td>
                <td><input type="checkbox" className="tag-toggle" checked readOnly /></td>
                <td>
                  <button className="tag-action-btn view">👁️</button>
                  <button className="tag-action-btn edit">✏️</button>
                  <button className="tag-action-btn delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TagSetting; 