import React from 'react';
import './History.css';

const historyData = [
  { time: '25 Jun, 4:52 PM', activity: '📤 You uploaded 5 images to Assets - IMG', status: '✅ Success', details: '🔍 View Files' },
  { time: '25 Jun, 4:50 PM', activity: '📩 You sent a text campaign to New Users', status: '✅ Sent', details: '📊 View Report' },
  { time: '25 Jun, 4:45 PM', activity: '🗑️ You deleted 3 contacts from tag Test Leads', status: '⚠️ Done', details: '🗂️ Undo' },
  { time: '25 Jun, 4:40 PM', activity: '📝 You edited the template Welcome_Text_01', status: '✅ Updated', details: '👁️ Preview' },
  { time: '25 Jun, 4:38 PM', activity: '🔒 You logged in from IP 192.168.1.10 (Chrome, Windows)', status: '🟢 Secure', details: '👁️ Preview' },
  { time: '25 Jun, 4:35 PM', activity: '📊 You generated a report for June Sales', status: '✅ Generated', details: '📄 Download Report' },
  { time: '25 Jun, 4:30 PM', activity: '🗓️ You scheduled a meeting with the Marketing Team', status: '✅ Scheduled', details: '🗓️ View Calendar' },
  { time: '25 Jun, 4:25 PM', activity: '🗨️ You updated the project status for Campaign X', status: '✅ Updated', details: '📄 View Details' },
  { time: '25 Jun, 4:20 PM', activity: '📤 You received 2 feedback responses from users', status: '✅ Received', details: '📝 View Feedback' },
  { time: '25 Jun, 4:15 PM', activity: '🔍 You searched for projects tagged "Urgent"', status: '✅ Found', details: '📁 View Projects' },
  { time: '25 Jun, 4:10 PM', activity: '📝 You created a new task for the design team', status: '✅ Created', details: '✔️ View Task' },
];

const History = () => {
  return (
    <div className="history-container">
      {/* Topbar */}
      <div className="history-topbar">
        <div className="history-title">History</div>
        
      </div>

      {/* Filter Section */}
      <div className="history-filters">
        <div className="filter-item">
          <span>Project Name</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="filter-item">
          <span>Select Companion Templates</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="filter-item">
          <span>25-Jun-2025</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="filter-item">
          <span>Status Filter</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Table */}
      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.time}</td>
                <td>{row.activity}</td>
                <td>{row.status}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History; 