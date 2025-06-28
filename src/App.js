import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import LiveChat from './Pages/LiveChat/LiveChat';
import Contacts from './Pages/Contacts/Contacts';
import History from './Pages/History/History';
import Assets from './Pages/Assets/Assets';
import TagSetting from './Pages/TagSetting/TagSetting';
import Billing from './Pages/Billing/Billing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/livechat" element={<LiveChat />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/history" element={<History />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/tagsetting" element={<TagSetting />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
