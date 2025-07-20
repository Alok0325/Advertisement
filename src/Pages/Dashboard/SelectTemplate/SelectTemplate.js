import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectTemplate.css';

const SelectTemplate = () => {
  const [activeTab, setActiveTab] = useState('approved');
  const navigate = useNavigate();

  const approvedTemplates = [
    { id: 1, name: 'first_message_offer1', status: 'APPROVED', type: 'IMAGE', createAt: '20 Jun 2025' },
    { id: 2, name: 'second_message_offer2', status: 'APPROVED', type: 'ICON', createAt: '21 Jun 2025' },
    { id: 3, name: 'third_message_offer3', status: 'APPROVED', type: 'GRAPHIC', createAt: '22 Jun 2025' },
    { id: 4, name: 'fourth_message_offer4', status: 'APPROVED', type: 'IMAGE', createAt: '23 Jun 2025' },
    { id: 5, name: 'fifth_message_offer5', status: 'APPROVED', type: 'ICON', createAt: '24 Jun 2025' },
    { id: 6, name: 'sixth_message_offer6', status: 'APPROVED', type: 'GRAPHIC', createAt: '25 Jun 2025' },
    { id: 7, name: 'seventh_message_offer7', status: 'APPROVED', type: 'IMAGE', createAt: '26 Jun 2025' }
  ];

  const underApprovalTemplates = Array.from({length: 8}, (_, i) => ({
    id: i + 1,
    name: 'welcome_message_01',
    status: 'UNDER APPROVAL',
    type: 'IMAGE',
    createAt: '20 Jun 2025'
  }));

  const draftedTemplates = [
    { id: 1, name: 'welcome_message_01', status: 'DRAFTED', type: 'IMAGE', createAt: '20 Jun 2025', declinedReason: 'Contains promotional language not allowed in Utility templates.' },
    { id: 2, name: 'welcome_message_02', status: 'DRAFTED', type: 'IMAGE', createAt: '21 Jun 2025', declinedReason: 'Meets all compliance requirements for Utility templates.' },
    { id: 3, name: 'welcome_message_03', status: 'DRAFTED', type: 'IMAGE', createAt: '22 Jun 2025', declinedReason: 'Under review for language appropriateness.' },
    { id: 4, name: 'welcome_message_04', status: 'DRAFTED', type: 'IMAGE', createAt: '23 Jun 2025', declinedReason: 'Incorporates prohibited content as per guidelines.' },
    { id: 5, name: 'welcome_message_05', status: 'DRAFTED', type: 'IMAGE', createAt: '24 Jun 2025', declinedReason: 'Successfully aligns with Utility template standards.' },
    { id: 6, name: 'welcome_message_06', status: 'DRAFTED', type: 'IMAGE', createAt: '25 Jun 2025', declinedReason: 'Awaiting final approval from compliance officer.' },
    { id: 7, name: 'welcome_message_07', status: 'DRAFTED', type: 'IMAGE', createAt: '26 Jun 2025', declinedReason: 'Clear of any promotional language issues.' },
    { id: 8, name: 'welcome_message_08', status: 'DRAFTED', type: 'IMAGE', createAt: '27 Jun 2025', declinedReason: 'Does not meet the required tone for Utility templates.' }
  ];

  const declinedTemplates = [
    { id: 1, name: 'welcome_message_01', status: 'DECLINED', type: 'IMAGE', createAt: '20 Jun 2025', declinedReason: 'Contains promotional language not allowed in Utility templates.' },
    { id: 2, name: 'welcome_message_02', status: 'DECLINED', type: 'IMAGE', createAt: '21 Jun 2025', declinedReason: 'Meets all compliance requirements for Utility templates.' },
    { id: 3, name: 'welcome_message_03', status: 'DECLINED', type: 'IMAGE', createAt: '22 Jun 2025', declinedReason: 'Under review for language appropriateness.' },
    { id: 4, name: 'welcome_message_04', status: 'DECLINED', type: 'IMAGE', createAt: '23 Jun 2025', declinedReason: 'Incorporates prohibited content as per guidelines.' },
    { id: 5, name: 'welcome_message_05', status: 'DECLINED', type: 'IMAGE', createAt: '24 Jun 2025', declinedReason: 'Successfully aligns with Utility template standards.' },
    { id: 6, name: 'welcome_message_06', status: 'DECLINED', type: 'IMAGE', createAt: '25 Jun 2025', declinedReason: 'Awaiting final approval from compliance officer.' },
    { id: 7, name: 'welcome_message_07', status: 'DECLINED', type: 'IMAGE', createAt: '26 Jun 2025', declinedReason: 'Clear of any promotional language issues.' },
    { id: 8, name: 'welcome_message_08', status: 'DECLINED', type: 'IMAGE', createAt: '27 Jun 2025', declinedReason: 'Does not meet the required tone for Utility templates.' }
  ];

  const getCurrentTemplates = () => {
    switch(activeTab) {
      case 'approved': return approvedTemplates;
      case 'under-approval': return underApprovalTemplates;
      case 'drafted': return draftedTemplates;
      case 'declined': return declinedTemplates;
      default: return approvedTemplates;
    }
  };

  return (
    <div className="select-template-container">
      <div className="template-header">
        <h2>Companion Templates</h2>
        <div className="template-header-actions">
          <button className="refresh-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4V10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12A8 8 0 1 1 4 12A8 8 0 0 1 12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Refresh
          </button>
        </div>
      </div>
      
      <div className="template-tabs">
        <button 
          className={`tab-btn ${activeTab === 'approved' ? 'active' : ''}`}
          onClick={() => setActiveTab('approved')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Approved
        </button>
        <button 
          className={`tab-btn ${activeTab === 'under-approval' ? 'active' : ''}`}
          onClick={() => setActiveTab('under-approval')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Under Approval
        </button>
        <button 
          className={`tab-btn ${activeTab === 'drafted' ? 'active' : ''}`}
          onClick={() => setActiveTab('drafted')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Drafted
        </button>
        <button 
          className={`tab-btn ${activeTab === 'declined' ? 'active' : ''}`}
          onClick={() => setActiveTab('declined')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Declined
        </button>
        <button className="new-templates-btn" onClick={() => navigate('/dashboard/templates/new')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New Templates
        </button>
      </div>

      <div className="template-table">
        <div className="table-header">
          <div className="header-cell">Name</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Type</div>
          <div className="header-cell">Create At</div>
          {(activeTab === 'drafted' || activeTab === 'declined') && (
            <div className="header-cell">Declined Reason</div>
          )}
          <div className="header-cell">Action</div>
        </div>

        <div className="table-body">
          {getCurrentTemplates().map((template) => (
            <div key={template.id} className="table-row">
              <div className="cell">{template.name}</div>
              <div className="cell">
                <span className={`status ${template.status.toLowerCase().replace(' ', '-')}`}>
                  {template.status}
                </span>
              </div>
              <div className="cell">{template.type}</div>
              <div className="cell">{template.createAt}</div>
              {(activeTab === 'drafted' || activeTab === 'declined') && (
                <div className="cell">{template.declinedReason}</div>
              )}
              <div className="cell">
                <button className="delete-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;
