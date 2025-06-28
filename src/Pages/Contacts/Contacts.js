import React from 'react';
import './Contacts.css';

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

const Contacts = () => {
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
                <input type="text" placeholder="Type number name" />
                <span className="search-icon">🔍</span>
              </div>
              <button className="contacts-btn import">Import Contacts +</button>
              <button className="contacts-btn export">Export Contacts ⬇</button>
              <button className="contacts-btn add">Add Contacts +</button>
            </div>
          </div>
          {/* Table */}
          <div className="contacts-table-wrapper">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Mobile No.</th>
                  <th>Tag</th>
                  <th>Date</th>
                  <th>Extra</th>
                  <th>Action</th>
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
                    <td><button className="delete-btn">Delete</button></td>
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
          {/* Distribution and Broadcast Section */}
          <div className="contacts-bottom-row">
            <div className="distribution-panel">
              <div className="distribution-title">Select Distribution xyz</div>
              <div className="distribution-options">
                <button className="dist-btn active">10% of 100%</button>
                <button className="dist-btn">25% of 100%</button>
                <button className="dist-btn">33% of 100%</button>
                <button className="dist-btn">50% of 100%</button>
                <button className="dist-btn">100% of Contacts</button>
                <button className="dist-btn">1st 10%</button>
                <button className="dist-btn">Next 10%</button>
                <button className="dist-btn">Next 10%</button>
                <button className="dist-btn">Next 10%</button>
                <button className="dist-btn">Next 10%</button>
                <button className="dist-btn">1st 25%</button>
                <button className="dist-btn">2nd 25%</button>
                <button className="dist-btn">3rd 25%</button>
                <button className="dist-btn">4th 25%</button>
                <button className="dist-btn">1st 33%</button>
                <button className="dist-btn">2nd 33%</button>
                <button className="dist-btn">3rd 33%</button>
                <button className="dist-btn">1st 50% Contacts</button>
                <button className="dist-btn">2nd 50% Contacts</button>
              </div>
            </div>
            <div className="broadcast-panel">
              <button className="broadcast-btn">Broadcast Now</button>
            </div>
          </div>
        </div>
        {/* Automation Panel */}
        <div className="contacts-automation-panel">
          <div className="automation-title">SELECT AUTOMATIZATION SYSTEM FOR 100% CONTACTS BROADCASTING</div>
          <select className="automation-select"><option>Select Project</option></select>
          <select className="automation-select"><option>Select Companion Template</option></select>
          <div className="automation-schedule-row">
            <select className="automation-select"><option>Select Scheduling</option></select>
            <select className="automation-select"><option>Select Time</option></select>
            <span className="automation-am">AM</span>
          </div>
          <div className="automation-radio-list">
            {['Every Day','1 Day Gap','2 Days Gap','3 Days Gap','4 Days Gap','5 Days Gap','6 Days Gap','7 Days Gap','8 Days Gap','9 Days Gap','10 Days Gap','11 Days Gap','12 Days Gap','13 Days Gap','14 Days Gap','15 Days Gap','Every Sat+Sun'].map((label, idx) => (
              <div className="automation-radio-row" key={label}>
                <input type="radio" name="schedule" />
                <span>{label}</span>
                <span className="automation-time">{['01:00','01:30','02:00','02:30','03:00','03:30','04:00','01:30','01:30','02:00','02:30','03:00','03:30','04:00','01:30','01:30','02:00'][idx]}</span>
              </div>
            ))}
          </div>
          <div className="automation-broadcast-for">
            <div>Broadcast For</div>
            <label><input type="radio" name="broadcastfor" /> For a Week</label>
            <label><input type="radio" name="broadcastfor" /> For a Month</label>
            <label><input type="radio" name="broadcastfor" /> For a Year</label>
          </div>
          <button className="automation-freeze-btn">Frieze and Save →</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 