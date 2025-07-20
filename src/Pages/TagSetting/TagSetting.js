import React, { useState } from 'react';
import './TagSetting.css';

const initialTags = [
  { id: 1, name: 'Ecommerce', color: 'red', category: 'Promotion', status: true },
  { id: 2, name: 'Message', color: 'green', category: 'Discount', status: true },
  { id: 3, name: 'Testing', color: 'green', category: 'Flash Sale', status: true },
  { id: 4, name: 'Digital Board', color: 'blue', category: 'Bundle Offer', status: true },
  { id: 5, name: 'Website Development', color: 'green', category: 'Loyalty Program', status: true },
  { id: 6, name: 'Ads', color: 'green', category: 'Seasonal Sale', status: true },
  { id: 7, name: 'Digital Marketing', color: 'blue', category: 'Free Shipping', status: true },
  { id: 8, name: 'Ecommerce', color: 'orange', category: 'Referral Bonus', status: true },
];

const TagSetting = () => {
  const [tags, setTags] = useState(initialTags);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTag, setNewTag] = useState({
    name: '',
    category: '',
    color: 'red'
  });

  // Filter tags based on search and status filter
  const filteredTags = tags.filter(tag => {
    const matchesSearch = tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tag.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || 
                         (selectedFilter === 'Active' && tag.status) ||
                         (selectedFilter === 'Inactive' && !tag.status);
    return matchesSearch && matchesFilter;
  });

  const handleAddTag = () => {
    if (newTag.name && newTag.category) {
      const newTagWithId = {
        id: Date.now(), // Simple ID generation
        name: newTag.name,
        category: newTag.category,
        color: newTag.color,
        status: true // New tags are active by default
      };
      
      setTags(prevTags => [...prevTags, newTagWithId]);
      setNewTag({ name: '', category: '', color: 'red' });
      setShowAddModal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTag(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatusToggle = (tagId) => {
    setTags(prevTags => 
      prevTags.map(tag => 
        tag.id === tagId ? { ...tag, status: !tag.status } : tag
      )
    );
  };

  const handleDeleteTag = (tagId) => {
    setTags(prevTags => prevTags.filter(tag => tag.id !== tagId));
  };

  const handleEditTag = (tagId) => {
    // You can implement edit functionality here
    console.log('Edit tag with ID:', tagId);
  };

  const handleViewTag = (tagId) => {
    // You can implement view functionality here
    console.log('View tag with ID:', tagId);
  };

  const getColorValue = (color) => {
    switch (color) {
      case 'red': return '#FF0000';
      case 'green': return '#00FF00';
      case 'blue': return '#0000FF';
      case 'orange': return '#FFA500';
      default: return '#000000'; // Fallback for unexpected colors
    }
  };

  return (
    <div className="tagsetting-page">
      <div className="tagsetting-container">
        {/* Title Section */}
        <div className="tagsetting-title">
          <h2>Tag Setting</h2>
        </div>

        {/* Filter Section */}
        <div className="tagsetting-filters">
          <div className="search-section">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search tags..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-section">
            <select 
              className="filter-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="All">All Tags</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <div className="action-section">
            <button className="create-btn" onClick={() => setShowAddModal(true)}>
              <i className="fas fa-plus"></i>
              Create New
            </button>
          </div>
        </div>

        {/* Tags Table */}
        <div className="tagsetting-table-wrapper">
          <table className="tagsetting-table">
            <thead>
              <tr>
                <th>Tag Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTags.length > 0 ? (
                filteredTags.map((tag) => (
                  <tr key={tag.id}>
                    <td>
                      <span className={`tag-badge ${tag.color}`}>
                        {tag.name}
                      </span>
                    </td>
                    <td>{tag.category}</td>
                    <td>
                      <label className="toggle-switch">
                        <input 
                          type="checkbox" 
                          checked={tag.status}
                          onChange={() => handleStatusToggle(tag.id)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn view-btn"
                          onClick={() => handleViewTag(tag.id)}
                          title="View Tag"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => handleEditTag(tag.id)}
                          title="Edit Tag"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteTag(tag.id)}
                          title="Delete Tag"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    <div className="no-data-content">
                      <i className="fas fa-tags"></i>
                      <p>No tags found</p>
                      <button 
                        className="create-first-btn"
                        onClick={() => setShowAddModal(true)}
                      >
                        Create your first tag
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Tag Modal */}
        {showAddModal && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-header-content">
                  <h3>Add New Tag</h3>
                  <div className="selected-color-preview">
                    <span className="color-label">Selected Color:</span>
                    <span className={`color-badge-preview ${newTag.color}`}>
                      {newTag.color.charAt(0).toUpperCase() + newTag.color.slice(1)}
                    </span>
                  </div>
                </div>
                <button 
                  className="modal-close" 
                  onClick={() => setShowAddModal(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <div className="form-group">
                  <label>Tag Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newTag.name}
                    onChange={handleInputChange}
                    placeholder="Enter tag name"
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={newTag.category}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Promotion">Promotion</option>
                    <option value="Discount">Discount</option>
                    <option value="Flash Sale">Flash Sale</option>
                    <option value="Bundle Offer">Bundle Offer</option>
                    <option value="Loyalty Program">Loyalty Program</option>
                    <option value="Seasonal Sale">Seasonal Sale</option>
                    <option value="Free Shipping">Free Shipping</option>
                    <option value="Referral Bonus">Referral Bonus</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tag Color</label>
                  <div className="color-options">
                    {['red', 'green', 'blue', 'orange'].map(color => (
                      <label key={color} className="color-option">
                        <input
                          type="radio"
                          name="color"
                          value={color}
                          checked={newTag.color === color}
                          onChange={handleInputChange}
                        />
                        <span className={`color-button ${color}`}>
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button 
                  className="btn-cancel" 
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className={`btn-add-tag ${newTag.color}`}
                  onClick={handleAddTag}
                  disabled={!newTag.name || !newTag.category}
                >
                  <i className="fas fa-plus"></i>
                  Add Tag
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagSetting; 