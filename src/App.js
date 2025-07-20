import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import LiveChat from './Pages/LiveChat/LiveChat';
import Contacts from './Pages/Contacts/Contacts';
import History from './Pages/History/History';
import Assets from './Pages/Assets/Assets';
import TagSetting from './Pages/TagSetting/TagSetting';
import Billing from './Pages/Billing/Billing';
import SelectTemplate from './Pages/Dashboard/SelectTemplate/SelectTemplate';
import NewTemplate from './Pages/Dashboard/SelectTemplate/NewTemplate/NewTemplate';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes with Sidebar */}
        <Route path="/dashboard" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Dashboard />
            </main>
          </div>
        } />
        <Route path="/dashboard/templates" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <SelectTemplate />
            </main>
          </div>
        } />
        <Route path="/dashboard/templates/new" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <NewTemplate />
            </main>
          </div>
        } />
        <Route path="/livechat" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <LiveChat />
            </main>
          </div>
        } />
        <Route path="/contacts" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Contacts />
            </main>
          </div>
        } />
        <Route path="/history" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <History />
            </main>
          </div>
        } />
        <Route path="/assets" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Assets />
            </main>
          </div>
        } />
        <Route path="/tagsetting" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <TagSetting />
            </main>
          </div>
        } />
        <Route path="/billing" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              <Billing />
            </main>
          </div>
        } />
        
        {/* Redirect old dashboard route to new one */}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
