import React from 'react';
import './Billing.css';

const months = [
  { name: 'June (current month)', net: '₹4,077.32', payment: '₹0.00' },
  { name: 'May', net: '₹8,377.56', payment: '₹10,000.00' },
  { name: 'April', net: '₹12,645.52', payment: '₹20,000.00' },
  { name: 'March', net: '₹12,645.52', payment: '₹20,000.00' },
];

const Billing = () => {
  return (
    <div className="billing-container">
      {/* Topbar */}
      <div className="billing-topbar">
        <div className="billing-title">Billing</div>
        <div className="billing-actions">
          <span className="billing-today">Today</span>
          <select className="billing-select"><option>Jun 18, 2025</option></select>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="billing-summary-row">
        <div className="billing-summary-card">
          <div className="summary-label">Available funds</div>
          <div className="summary-value">₹5,571.11</div>
          <div className="summary-link">See how this is calculated</div>
          <button className="summary-btn">Add funds</button>
        </div>
        <div className="billing-summary-card">
          <div className="summary-label">Last payment</div>
          <div className="summary-value">May 19 <span className="summary-amount">₹5,571.11</span></div>
          <div className="summary-desc">Manual payment</div>
          <div className="summary-card-icons">
            <span className="summary-card-icon">🟠</span>
            <span className="summary-card-icon">💳 Mastercard ••••1254</span>
          </div>
        </div>
      </div>
      {/* Month Section */}
      <div className="billing-month-section">
        <div className="billing-month-header">
          <span>June (current month)</span>
          <div className="billing-month-values">
            <span className="billing-month-net">Net cost <span className="info-icon">ⓘ</span> <b>₹4,077.32</b></span>
            <span className="billing-month-payment">Payment <b>₹0.00</b></span>
            <button className="billing-month-dropdown">▼</button>
          </div>
        </div>
      </div>
      {/* Year Dropdown and Monthly Breakdown */}
      <div className="billing-year-row">
        <select className="billing-year-select"><option>2025</option></select>
        <button className="billing-documents-btn">📄 View documents</button>
      </div>
      <div className="billing-months-list">
        {months.slice(1).map((m, idx) => (
          <div className="billing-month-item" key={m.name}>
            <span>{m.name}</span>
            <span className="billing-month-net">Net cost <span className="info-icon">ⓘ</span> <b>{m.net}</b></span>
            <span className="billing-month-payment">Payments <b>{m.payment}</b></span>
            <button className="billing-month-dropdown">▼</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing; 