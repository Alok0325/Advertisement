import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    mobile: '',
    tag: ''
  });

  const handleAddContact = () => {
    if (newContact.name && newContact.mobile && newContact.tag) {
      // Add the new contact to the list
      contacts.push(newContact);
      // Reset form and close modal
      setNewContact({ name: '', mobile: '', tag: '' });
      setShowAddModal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contacts = [
    { name: 'Ajay', mobile: '+9198765 43210', tag: 'Student', date: 'Apr 25, 19:30:00 PM', extra: 0 },
    { name: 'Priya', mobile: '+9198765 98765', tag: 'Intern', date: 'May 1, 14:00:00 PM', extra: 0 },
    { name: 'Rahul', mobile: '+9198765 65432', tag: 'Developer', date: 'May 3, 10:30:00 AM', extra: 0 },
    { name: 'Sneha', mobile: '+9198765 12345', tag: 'Designer', date: 'May 5, 11:15:00 AM', extra: 0 },
    { name: 'Vikram', mobile: '+9198765 56789', tag: 'Engineer', date: 'May 7, 09:45:00 AM', extra: 0 },
    { name: 'Anita', mobile: '+9198765 54321', tag: 'Marketer', date: 'May 8, 15:00:00 PM', extra: 0 },
    { name: 'Karan', mobile: '+9198765 67890', tag: 'Manager', date: 'May 10, 13:30:00 PM', extra: 0 },
    { name: 'Nisha', mobile: '+9198765 23456', tag: 'Analyst', date: 'May 12, 16:00:00 PM', extra: 0 },
    { name: 'Arjun', mobile: '+9198765 34567', tag: 'Tester', date: 'May 15, 12:00:00 PM', extra: 0 },
    { name: 'Deepa', mobile: '+9198765 45678', tag: 'Support', date: 'May 18, 17:45:00 PM', extra: 0 },
  ];

  return (
    <div className="contacts-container">
      {/* Topbar */}
      <div className="contacts-topbar">
        <div className="contacts-title">Bulk Marketing Series</div>
        <div className="contacts-credit">Credit : ₹9999</div>
      </div>
      <div className="contacts-content">
        {/* Main Table Section */}
        <div className="contacts-main">
          {/* Filters */}
          <div className="contacts-filters">
            <div className="contacts-filters-row">
              <select className="contacts-select"><option>Select Project</option></select>
              <select className="contacts-select"><option>Select Template</option></select>
              <select className="contacts-select"><option>Select Tag</option></select>
            </div>
            <div className="contacts-actions-row">
              <div className="contacts-search">
                <input type="text" placeholder="Search by name/number" />
                <span className="search-icon">🔍</span>
              </div>
              <button className="contacts-btn import">
                Import Contacts
                <i className="fas fa-plus-circle btn-icon"></i>
              </button>
              <button className="contacts-btn export">
                Export Contacts
                <i className="fas fa-upload btn-icon"></i>
              </button>
                      <button className="contacts-btn add" onClick={() => setShowAddModal(true)}>
          Add Contacts
          <i className="fas fa-plus-circle btn-icon"></i>
        </button>
            </div>
          </div>

          {/* Add Contacts Modal */}
          {showAddModal && (
            <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>Add Contacts</h3>
                  <button 
                    className="modal-close" 
                    onClick={() => setShowAddModal(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <div className="modal-body">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={newContact.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Mobile No.</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter mobile no."
                      value={newContact.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tag</label>
                    <select
                      name="tag"
                      value={newContact.tag}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a tag</option>
                      <option value="Student">Student</option>
                      <option value="Intern">Intern</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Marketer">Marketer</option>
                      <option value="Manager">Manager</option>
                      <option value="Analyst">Analyst</option>
                      <option value="Tester">Tester</option>
                      <option value="Support">Support</option>
                    </select>
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
                    className="btn-add" 
                    onClick={handleAddContact}
                  >
                    Add Contacts
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Table */}
          <div className="contacts-table-wrapper">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>
                    <input type="radio" name="selectAll" />
                  </th>
                  <th>Name ▼</th>
                  <th>Mobile No.</th>
                  <th>Tag ▼</th>
                  <th>Date</th>
                  <th>Extra</th>
                  <th>Action ▼</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, idx) => (
                  <tr key={c.name}>
                    <td><input type="radio" name="contact" /></td>
                    <td>{c.name}</td>
                    <td>{c.mobile}</td>
                    <td>{c.tag}</td>
                    <td>{c.date}</td>
                    <td>{c.extra}</td>
                    <td><button className="delete-btn">Hide</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination and Send Button */}
          <div className="contacts-pagination-row">
            <span>Showing 1 to 25 of 1000 entries</span>
            <div className="contacts-pagination-controls">
              <select><option>25</option></select>
              <button>{'<'}</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>{'>'}</button>
            </div>
            <button className="send-btn">Send/Test Now</button>
          </div>

          {/* Divider Line */}
          <div className="pagination-divider"></div>

          {/* Distribution and Broadcast Section */}
          <div className="contacts-bottom-row">
            <div className="distribution-title-vertical">Select Distribution xyz</div>
            <div className="distribution-panel">
              <div className="distribution-options">
                {/* Row 1 - Top Row (5 larger buttons) */}
                <div className="dist-row row-1">
                  <button className="dist-btn active">10% of 100%</button>
                  <button className="dist-btn">25% of 100%</button>
                  <button className="dist-btn">33% of 100%</button>
                  <button className="dist-btn">50% of 100%</button>
                  <button className="dist-btn">100% of Contacts</button>
                </div>
                
                {/* Row 2 - 10 smaller buttons */}
                <div className="dist-row row-2">
                  <button className="dist-btn">1st 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                  <button className="dist-btn">Next 10%</button>
                </div>
                
                {/* Row 3 - 4 buttons */}
                <div className="dist-row row-3">
                  <button className="dist-btn">1st 25%</button>
                  <button className="dist-btn">2nd 25%</button>
                  <button className="dist-btn">3rd 25%</button>
                  <button className="dist-btn">4th 25%</button>
                </div>
                
                {/* Row 4 - 3 buttons */}
                <div className="dist-row row-4">
                  <button className="dist-btn">1st 33%</button>
                  <button className="dist-btn">2nd 33%</button>
                  <button className="dist-btn">3rd 33%</button>
                </div>
                
                {/* Row 5 - 2 buttons */}
                <div className="dist-row row-5">
                  <button className="dist-btn">1st 50% Contacts</button>
                  <button className="dist-btn">2nd 50% Contacts</button>
                </div>
              </div>
            </div>
            <div className="broadcast-panel">
              <button className="broadcast-btn">Broadcast Now</button>
            </div>
          </div>
        </div>
        {/* Automation Panel */}
        <div className="automation-panel">
          <div className="automation-header">
            SELECT AUTOMATIZATION SYSTEM FOR 100% CONTACTS BROADCASTING
          </div>
          
          <div className="automation-selections">
            <div className="selection-field">
              <span>Select Project</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="selection-field">
              <span>Select Companion Template</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          
          <div className="automation-options">
            <div className="scheduling-column">
              <div className="column-header">
                <span>
                  <div>Select</div>
                  <div>Scheduling</div>
                </span>
              </div>
              <div className="radio-options">
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>Every Day</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>1 Day Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>2 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>3 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>4 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>5 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>6 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>7 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>8 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>9 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>10 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>11 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>12 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>13 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>14 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>15 Days Gap</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="scheduling" />
                  <span>Every Sat+Sun</span>
                </label>
              </div>
            </div>
            
            <div className="time-column">
              <div className="column-header">
                <span>
                  <div>Select</div>
                  <div>Time</div>
                </span>
                <div className="time-unit">
                  <select className="am-pm-select">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
              <div className="radio-options">
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>02:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>02:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>03:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>03:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>04:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>02:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>02:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>03:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>03:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>04:00</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>01:30</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="time" />
                  <span>02:00</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="broadcast-duration">
            <div className="duration-divider"></div>
            <div className="duration-title">Broadcast For</div>
            <div className="duration-options">
              <label className="radio-option">
                <input type="radio" name="duration" />
                <span>For a Week</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="duration" />
                <span>For a Month</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="duration" />
                <span>For a Year</span>
              </label>
            </div>
          </div>
          
          <button className="freeze-save-btn">
            Frieze and Save
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 