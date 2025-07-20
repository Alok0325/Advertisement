import React, { useState } from 'react';
import './ProjectPage.css';

const ProjectPage = () => {
  const [projectName, setProjectName] = useState('');

  const projects = [
    {
      id: 1,
      name: 'NITA INFOTECH',
      status: 'Verified',
      plan: '14/01/2025',
      number: '918920207111',
      createdOn: '1th June'
    },
    {
      id: 2,
      name: 'VIP HOME TUTORS',
      status: 'Unverified',
      plan: '14/01/2025',
      number: '918920207111',
      createdOn: '1th June'
    },
    {
      id: 3,
      name: 'VIP TUTORS',
      status: 'Verified',
      plan: '14/01/2025',
      number: '918920207111',
      createdOn: '1th June'
    }
  ];

  const handleCreateProject = () => {
    if (projectName.trim()) {
      console.log('Creating project:', projectName);
      setProjectName('');
    }
  };

  return (
    <div className="project-page-container">
      <div className="project-header">
        <h2>Welcome, Soni</h2>
      </div>

      <div className="project-creation-section">
        <div className="project-creation-content">
          <div className="project-creation-left">
            <h3>Create New Project:</h3>
            <p>One Business Project is Associated with WhatsApp Business API No. only</p>
            <div className="create-project-form">
              <input
                type="text"
                className="project-name-input"
                placeholder="Enter your project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <button className="create-btn" onClick={handleCreateProject}>
                Create
              </button>
            </div>
          </div>
          <div className="project-creation-right">
            <div className="image-container">
              <div className="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-projects-section">
        <h3>Recent Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h4>{project.name}</h4>
              <p>Status: <span className={project.status.toLowerCase()}>{project.status}</span></p>
              <p>Plan: {project.plan}</p>
              <p>Number: {project.number}</p>
              <p>Created on: {project.createdOn}</p>
              <button className="view-dashboard-btn">View on Dashboard</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
