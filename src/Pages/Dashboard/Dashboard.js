import React, { useState } from 'react';
import './Dashboard.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const recentProjects = [
  {
    name: 'NITA INFOTECH',
    status: 'Verified',
    plan: '14/01/2025',
    number: '918920207111',
    created: '1th June',
  },
  {
    name: 'VIP HOME TUTORS',
    status: 'Unverified',
    plan: '14/01/2025',
    number: '918920207111',
    created: '1th June',
  },
  {
    name: 'VIP TUTORS',
    status: 'Verified',
    plan: '14/01/2025',
    number: '918920207111',
    created: '1th June',
  },
];

const chartData = [
  { month: 'JAN', contacts: 25, delivered: 53, declined: 31 },
  { month: 'FEB', contacts: 28, delivered: 54, declined: 33 },
  { month: 'MAR', contacts: 10, delivered: 52, declined: 29 },
  { month: 'APR', contacts: 40, delivered: 50, declined: 28 },
  { month: 'MAY', contacts: 80, delivered: 62, declined: 42 },
  { month: 'JUN', contacts: 45, delivered: 48, declined: 20 },
  { month: 'JUL', contacts: 90, delivered: 70, declined: 60 },
  { month: 'AUG', contacts: 70, delivered: 65, declined: 70 },
  { month: 'SEP', contacts: 60, delivered: 60, declined: 60 },
  { month: 'OCT', contacts: 85, delivered: 85, declined: 85 },
  { month: 'NOV', contacts: 90, delivered: 90, declined: 90 },
  { month: 'DEC', contacts: 95, delivered: 95, declined: 90 },
];

const templateTabs = [
  { label: 'Approved', icon: '🎵' },
  { label: 'Under Approval', icon: '🅣' },
  { label: 'Drafted', icon: '📅' },
  { label: 'Declined', icon: '🗂️' },
];

const templatesData = {
  Approved: [
    { name: 'first_message_offer1', status: 'APPROVED', type: 'IMAGE', date: '20 Jun 2025' },
    { name: 'second_message_offer2', status: 'APPROVED', type: 'ICON', date: '21 Jun 2025' },
    { name: 'third_message_offer3', status: 'APPROVED', type: 'GRAPHIC', date: '22 Jun 2025' },
    { name: 'fourth_message_offer4', status: 'APPROVED', type: 'IMAGE', date: '23 Jun 2025' },
    { name: 'fifth_message_offer5', status: 'APPROVED', type: 'ICON', date: '24 Jun 2025' },
    { name: 'sixth_message_offer6', status: 'APPROVED', type: 'GRAPHIC', date: '25 Jun 2025' },
    { name: 'seventh_message_offer7', status: 'APPROVED', type: 'IMAGE', date: '26 Jun 2025' },
  ],
  'Under Approval': Array(8).fill({ name: 'welcome_message_01', status: 'UNDER APPROVAL', type: 'IMAGE', date: '20 Jun 2025' }),

  Drafted: [
    { name: 'welcome_message_01', status: 'DRAFTED', type: 'IMAGE', date: '20 Jun 2025', reason: 'Contains promotional language not allowed in Utility templates.' },
    { name: 'welcome_message_02', status: 'DRAFTED', type: 'IMAGE', date: '21 Jun 2025', reason: 'Meets all compliance requirements for Utility templates.' },
    { name: 'welcome_message_03', status: 'DRAFTED', type: 'IMAGE', date: '22 Jun 2025', reason: 'Under review for language appropriateness.' },
    { name: 'welcome_message_04', status: 'DRAFTED', type: 'IMAGE', date: '23 Jun 2025', reason: 'Incorporates prohibited content as per guidelines.' },
    { name: 'welcome_message_05', status: 'DRAFTED', type: 'IMAGE', date: '24 Jun 2025', reason: 'Successfully aligns with Utility template standards.' },
    { name: 'welcome_message_06', status: 'DRAFTED', type: 'IMAGE', date: '25 Jun 2025', reason: 'Awaiting final approval from compliance officer.' },
    { name: 'welcome_message_07', status: 'DRAFTED', type: 'IMAGE', date: '26 Jun 2025', reason: 'Clear of any promotional language issues.' },
    { name: 'welcome_message_08', status: 'DRAFTED', type: 'IMAGE', date: '27 Jun 2025', reason: 'Does not meet the required tone for Utility templates.' },
  ],
  Declined: [
    { name: 'welcome_message_01', status: 'DECLINED', type: 'IMAGE', date: '20 Jun 2025', reason: 'Contains promotional language not allowed in Utility templates.' },
    { name: 'welcome_message_02', status: 'DECLINED', type: 'IMAGE', date: '21 Jun 2025', reason: 'Meets all compliance requirements for Utility templates.' },
    { name: 'welcome_message_03', status: 'DECLINED', type: 'IMAGE', date: '22 Jun 2025', reason: 'Under review for language appropriateness.' },
    { name: 'welcome_message_04', status: 'DECLINED', type: 'IMAGE', date: '23 Jun 2025', reason: 'Incorporates prohibited content as per guidelines.' },
    { name: 'welcome_message_05', status: 'DECLINED', type: 'IMAGE', date: '24 Jun 2025', reason: 'Successfully aligns with Utility template standards.' },
    { name: 'welcome_message_06', status: 'DECLINED', type: 'IMAGE', date: '25 Jun 2025', reason: 'Awaiting final approval from compliance officer.' },
    { name: 'welcome_message_07', status: 'DECLINED', type: 'IMAGE', date: '26 Jun 2025', reason: 'Clear of any promotional language issues.' },
    { name: 'welcome_message_08', status: 'DECLINED', type: 'IMAGE', date: '27 Jun 2025', reason: 'Does not meet the required tone for Utility templates.' },
  ],
};

const Dashboard = () => {
  const [showProjectSelect, setShowProjectSelect] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [activeTab, setActiveTab] = useState('Approved');

  if (showProjectSelect) {
    return (
      <div className="dashboard-project-select">
        <div className="dashboard-welcome">Welcome, Soni</div>
        <div className="dashboard-project-card">
          <div className="dashboard-project-create">
            <div className="create-title">Create New Project:</div>
            <div className="create-desc">One Business Project is Associated with WhatsApp Business API No. only</div>
            <div className="create-form-row">
              <input className="create-input" placeholder="Enter your project name" />
              <button className="create-btn">Create</button>
              <div className="create-image-placeholder">
                <span role="img" aria-label="image">🖼️</span>
              </div>
            </div>
          </div>
          <hr className="project-divider" />
          <div className="recent-title">Recent Projects</div>
          <div className="recent-projects-row">
            {recentProjects.map((proj, idx) => (
              <div className="recent-project-card" key={proj.name}>
                <div className="recent-project-name">{proj.name}</div>
                <div className="recent-project-info"><b>Status:</b> <span className={proj.status === 'Verified' ? 'verified' : 'unverified'}>{proj.status}</span></div>
                <div className="recent-project-info"><b>Plan:</b> {proj.plan}</div>
                <div className="recent-project-info"><b>Number:</b> {proj.number}</div>
                <div className="recent-project-info"><b>Created on:</b> {proj.created}</div>
                <button className="recent-project-btn">View on Dashboard</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showTemplates) {
    return (
      <div className="dashboard-templates-container">
        <div className="templates-header-row">
          <span className="templates-title">Companion Templates</span>
          <button className="templates-refresh-btn">🔄 Refresh</button>
        </div>
        <div className="templates-tabs-row">
          {templateTabs.map(tab => (
            <button
              key={tab.label}
              className={`templates-tab${activeTab === tab.label ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              <span className="tab-icon">{tab.icon}</span> {tab.label}
            </button>
          ))}
          <button className="templates-new-btn">+ New Templates</button>
        </div>
        <div className="templates-table-wrapper">
          <table className="templates-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Type</th>
                <th>Create At</th>
                {activeTab === 'Drafted' || activeTab === 'Declined' ? <th>Declined Reason</th> : null}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {templatesData[activeTab].map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td className={
                    row.status === 'APPROVED' ? 'status-approved' :
                    row.status === 'UNDER APPROVAL' ? 'status-under' :
                    row.status === 'DRAFTED' ? 'status-drafted' :
                    row.status === 'DECLINED' ? 'status-declined' : ''
                  }>{row.status}</td>
                  <td>{row.type}</td>
                  <td>{row.date}</td>
                  {activeTab === 'Drafted' || activeTab === 'Declined' ? <td>{row.reason}</td> : null}
                  <td>
                    <button className="template-action-btn edit">✏️</button>
                    <button className="template-action-btn delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      {/* Topbar */}
      <div className="dashboard-topbar">
        <div className="dashboard-dropdowns">
          <select className="dashboard-select" onClick={() => setShowProjectSelect(true)}>
            <option>Select Project</option>
          </select>
          <button className="dashboard-add-btn" onClick={() => setShowProjectSelect(true)}>+</button>
          <select className="dashboard-select" onClick={() => setShowTemplates(true)}>
            <option>Select Companion Templates</option>
          </select>
          <button className="dashboard-add-btn">+</button>
        </div>
        <div className="dashboard-status-group">
          <div className="dashboard-selected">Nita Infotech (Selected)</div>
          <div className="dashboard-status">Project Status : <span className="dashboard-status-alert">1 Month Left</span></div>
        </div>
      </div>
      {/* Chart Card */}
      <div className="dashboard-card graph-container">
        <div className="graph-header-row">
          <span className="graph-title">Overview:</span>
          <div className="graph-legend">
            <span className="graph-legend-item"><span className="legend-dot legend-blue"></span> Total Contacts (1000)</span>
            <span className="graph-legend-item"><span className="legend-dot legend-green"></span> Total Delivered (800)</span>
            <span className="graph-legend-item"><span className="legend-dot legend-red"></span> Total Declined Contacts (200)</span>
          </div>
          <select className="graph-date-select"><option>17-Jun-2025</option></select>
        </div>
        <div className="dashboard-chart-area">
          <ResponsiveContainer width="100%" height={420}>
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 14 }} />
              <YAxis domain={[10, 100]} tick={{ fontSize: 14 }} />
              <Tooltip />
              <Line type="monotone" dataKey="contacts"  stroke="#3b82f6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="delivered"  stroke="#22c55e" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="declined"  stroke="#ef4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Plans Card */}
      <div className="dashboard-card plans-card">
        <div className="plans-title">Update Plane or Recharge for Plane "Existing or New"</div>
        <div className="plans-grid">
          <div className="plan-box">
            <div className="plan-type">Quarterly Plan</div>
            <div className="plan-price">₹3k <span className="plan-gst">+GST</span></div>
            <button className="plan-btn">Recharge Now</button>
            <div className="plan-desc">For Starters</div>
          </div>
          <div className="plan-box">
            <div className="plan-type">Monthly Plan</div>
            <div className="plan-price">₹1500 <span className="plan-gst">+GST</span></div>
            <button className="plan-btn">Recharge Now</button>
            <div className="plan-desc">For Testing</div>
          </div>
          <div className="plan-box">
            <div className="plan-type">Half Yearly Plan</div>
            <div className="plan-price">₹5k <span className="plan-gst">+GST</span></div>
            <button className="plan-btn">Recharge Now</button>
            <div className="plan-desc">For MSME</div>
          </div>
          <div className="plan-box">
            <div className="plan-type">Yearly Plan</div>
            <div className="plan-price">₹11k <span className="plan-gst">+GST</span></div>
            <button className="plan-btn">Recharge Now</button>
            <div className="plan-desc">Best Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 