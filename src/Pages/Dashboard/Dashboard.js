import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('17-Jun-2025');
  const [selectedProject, setSelectedProject] = useState('Select Project');
  const [selectedTemplate, setSelectedTemplate] = useState('Select Companion Templates');
  const navigate = useNavigate();

  const handleProjectPlusClick = () => {
    navigate('/dashboard/projects');
  };

  const handleTemplatePlusClick = () => {
    navigate('/dashboard/templates');
  };

  // Chart data matching the image
  const chartData = [
    { month: 'JAN', totalContacts: 25, totalDelivered: 52, totalDeclined: 31 },
    { month: 'FEB', totalContacts: 27, totalDelivered: 54, totalDeclined: 32 },
    { month: 'MAR', totalContacts: 10, totalDelivered: 50, totalDeclined: 28 },
    { month: 'APR', totalContacts: 82, totalDelivered: 62, totalDeclined: 47 },
    { month: 'MAY', totalContacts: 50, totalDelivered: 64, totalDeclined: 30 },
    { month: 'JUN', totalContacts: 42, totalDelivered: 45, totalDeclined: 23 },
    { month: 'JUL', totalContacts: 95, totalDelivered: 75, totalDeclined: 65 },
    { month: 'AUG', totalContacts: 72, totalDelivered: 72, totalDeclined: 58 },
    { month: 'SEP', totalContacts: 68, totalDelivered: 60, totalDeclined: 57 },
    { month: 'OCT', totalContacts: 88, totalDelivered: 98, totalDeclined: 68 },
    { month: 'NOV', totalContacts: 92, totalDelivered: 102, totalDeclined: 98 },
    { month: 'DEC', totalContacts: 93, totalDelivered: 105, totalDeclined: 100 }
  ];

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="dropdown-container">
            <select 
              className="header-dropdown"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option>Select Project</option>
              <option>Project 1</option>
              <option>Project 2</option>
              <option>Project 3</option>
            </select>
            <button className="info-btn" onClick={handleProjectPlusClick}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          
          <div className="dropdown-container">
            <select 
              className="header-dropdown"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option>Select Companion Templates</option>
              <option>Template 1</option>
              <option>Template 2</option>
              <option>Template 3</option>
            </select>
            <button className="info-btn" onClick={handleTemplatePlusClick}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="header-center">
          <div className="company-info">
            <span className="company-name">
              <i className="fas fa-building"></i>
              Nita Infotech (Selected)
            </span>
          </div>
        </div>

        <div className="header-status">
          <div className="project-status">
            <i className="fas fa-clock"></i>
            <span>Project Status: <span className="status-highlight">1 Month Left</span></span>
          </div>
        </div>

        <div className="header-right">
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">User</span>
              <span className="user-role">Admin</span>
            </div>
            <img src="https://via.placeholder.com/40x40/4285f4/ffffff?text=U" alt="User" className="user-avatar" />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="overview-section">
        <div className="overview-header">
          <h2>Overview:</h2>
          <div className="metrics-legend">
            <div className="metric-item">
              <span className="dot blue"></span>
              <span>Total Contacts (1000)</span>
            </div>
            <div className="metric-item">
              <span className="dot green"></span>
              <span>Total Delivered (800)</span>
            </div>
            <div className="metric-item">
              <span className="dot red"></span>
              <span>Total Declined Contacts (200)</span>
            </div>
          </div>
          <div className="date-selector">
            <select 
              className="date-select"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option>17-Jun-2025</option>
              <option>16-Jun-2025</option>
              <option>15-Jun-2025</option>
            </select>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                domain={[0, 110]}
                ticks={[10, 20, 40, 60, 80, 100]}
              />
              <Line 
                type="monotone" 
                dataKey="totalContacts" 
                stroke="#4285f4" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 4, fill: '#4285f4' }}
              />
              <Line 
                type="monotone" 
                dataKey="totalDelivered" 
                stroke="#34a853" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 4, fill: '#34a853' }}
              />
              <Line 
                type="monotone" 
                dataKey="totalDeclined" 
                stroke="#ea4335" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 4, fill: '#ea4335' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2>Update Plane or Recharge for Plane "Existing or New"</h2>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Quarterly Plan</h3>
            <div className="price">₹3k <span className="tax">+GST</span></div>
            <button className="recharge-btn">Recharge Now</button>
            <div className="plan-type">For Starters</div>
          </div>
          
          <div className="pricing-card">
            <h3>Monthly Plan</h3>
            <div className="price">₹1500 <span className="tax">+GST</span></div>
            <button className="recharge-btn">Recharge Now</button>
            <div className="plan-type">For Testing</div>
          </div>
          
          <div className="pricing-card">
            <h3>Half Yearly Plan</h3>
            <div className="price">₹5k <span className="tax">+GST</span></div>
            <button className="recharge-btn">Recharge Now</button>
            <div className="plan-type">For MSME</div>
          </div>
          
          <div className="pricing-card">
            <h3>Yearly Plan</h3>
            <div className="price">₹11k <span className="tax">+GST</span></div>
            <button className="recharge-btn">Recharge Now</button>
            <div className="plan-type">Best Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
