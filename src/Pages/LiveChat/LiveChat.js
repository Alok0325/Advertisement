import React, { useState, useEffect, useRef } from 'react';
import './LiveChat.css';

const users = [
  { name: 'Ajay', requests: 10, phone: '+919876543210' },
  { name: 'Maya', requests: 5, phone: '+919876543211' },
  { name: 'John', requests: 3, phone: '+919876543212' },
  { name: 'Sara', requests: 8, phone: '+919876543213' },
  { name: 'Liam', requests: 12, phone: '+919876543214' },
  { name: 'Emma', requests: 7, phone: '+919876543215' },
  { name: 'Noah', requests: 15, phone: '+919876543216' },
  { name: 'Olivia', requests: 4, phone: '+919876543217' },
  { name: 'Sophia', requests: 9, phone: '+919876543218' },
  { name: 'James', requests: 6, phone: '+919876543219' },
  { name: 'Mia', requests: 1, phone: '+919876543220' },
];

const tabList = [
  { label: 'Requesting (800)', key: 'requesting' },
  { label: 'Active (500)', key: 'active' },
  { label: 'Intervened (50)', key: 'intervened' },
];

// Sample messages for each user
const sampleMessages = {
  'Ajay': [
    { id: 1, type: 'sent', text: 'What is the best programming language?', time: '09.13', status: 'Read' },
    { id: 2, type: 'received', text: 'There are many programming languages in the market that are used in designing and building websites, various applications and other tasks.', time: '09.13', status: 'Read' },
    { id: 3, type: 'sent', text: 'What is the best programming language?', time: '09.13', status: 'Read' },
  ],
  'Maya': [
    { id: 1, type: 'received', text: 'Hello! I need help with my order.', time: '09.15', status: 'Read' },
    { id: 2, type: 'sent', text: 'Hi Maya! I\'d be happy to help you with your order. Can you please provide your order number?', time: '09.16', status: 'Read' },
  ],
  'John': [
    { id: 1, type: 'received', text: 'Is there a discount available?', time: '09.20', status: 'Read' },
    { id: 2, type: 'sent', text: 'Yes! We have a 20% discount on all products this week. Use code SAVE20 at checkout.', time: '09.21', status: 'Read' },
  ],
  'Sara': [
    { id: 1, type: 'sent', text: 'Welcome to our platform! How can I assist you today?', time: '09.25', status: 'Read' },
    { id: 2, type: 'received', text: 'Thank you! I\'m looking for information about your services.', time: '09.26', status: 'Read' },
  ],
  'Liam': [
    { id: 1, type: 'received', text: 'I have a technical question about the API.', time: '09.30', status: 'Read' },
    { id: 2, type: 'sent', text: 'I\'ll connect you with our technical support team right away.', time: '09.31', status: 'Read' },
  ],
  'Emma': [
    { id: 1, type: 'sent', text: 'Hi Emma! Your account has been successfully created.', time: '09.35', status: 'Read' },
    { id: 2, type: 'received', text: 'Great! What are the next steps?', time: '09.36', status: 'Read' },
  ],
  'Noah': [
    { id: 1, type: 'received', text: 'I want to cancel my subscription.', time: '09.40', status: 'Read' },
    { id: 2, type: 'sent', text: 'I understand. Let me help you with the cancellation process.', time: '09.41', status: 'Read' },
  ],
  'Olivia': [
    { id: 1, type: 'sent', text: 'Your payment has been processed successfully!', time: '09.45', status: 'Read' },
    { id: 2, type: 'received', text: 'Thank you! When will I receive my order?', time: '09.46', status: 'Read' },
  ],
  'Sophia': [
    { id: 1, type: 'received', text: 'Can you help me reset my password?', time: '09.50', status: 'Read' },
    { id: 2, type: 'sent', text: 'Of course! I\'ll send you a password reset link.', time: '09.51', status: 'Read' },
  ],
  'James': [
    { id: 1, type: 'sent', text: 'Welcome back, James! How can I help you today?', time: '09.55', status: 'Read' },
    { id: 2, type: 'received', text: 'I need to update my billing information.', time: '09.56', status: 'Read' },
  ],
  'Mia': [
    { id: 1, type: 'received', text: 'Hello! I\'m a new customer.', time: '10.00', status: 'Read' },
    { id: 2, type: 'sent', text: 'Welcome, Mia! We\'re excited to have you on board.', time: '10.01', status: 'Read' },
  ],
};

export default function LiveChat() {
  const [activeTab, setActiveTab] = useState('requesting');
  const [selectedUser, setSelectedUser] = useState('Ajay');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(sampleMessages['Ajay']);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserSelect = (userName) => {
    setSelectedUser(userName);
    setMessages(sampleMessages[userName] || []);
    setIsTyping(false);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        type: 'sent',
        text: message.trim(),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }).replace(':', '.'),
        status: 'Sent'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Show typing indicator
      setIsTyping(true);
      
      // Simulate received message after 2 seconds
      setTimeout(() => {
        const responses = [
          'Thank you for your message!',
          'I understand your concern.',
          'Let me check that for you.',
          'I\'ll get back to you shortly.',
          'Thanks for reaching out!',
          'That\'s a great question!',
          'I\'m here to help you.',
          'Let me assist you with that.',
          'I\'ll look into this for you.',
          'Thanks for contacting us!'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const receivedMessage = {
          id: Date.now() + 1,
          type: 'received',
          text: randomResponse,
          time: new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          }).replace(':', '.'),
          status: 'Read'
        };
        
        setIsTyping(false);
        setMessages(prev => [...prev, receivedMessage]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const selectedUserData = users.find(user => user.name === selectedUser);

  return (
    <div className="livechat-page">
      <div className="livechat-container">
        {/* Main Content */}
        <main className="main-content">
          {/* Top Bar */}
          <header className="top-bar">
            <input className="project-name-input" placeholder="Project Name" />
            <select className="template-select">
              <option>Select Companion Templates</option>
            </select>
            <select className="company-select">
              <option>Nita Infotech (Selected)</option>
            </select>
            <input className="date-input" type="date" value="2025-06-17" readOnly />
          </header>
          
          {/* Chat Section */}
          <section className="chat-section">
            {/* User List */}
            <div className="user-list-panel">
              <div className="tabs">
                {tabList.map(tab => (
                  <button
                    key={tab.key}
                    className={`tab${activeTab === tab.key ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <ul className="user-list">
                {users.map((user, idx) => (
                  <li 
                    key={user.name} 
                    className={`user-item${selectedUser === user.name ? ' selected' : ''}`}
                    onClick={() => handleUserSelect(user.name)}
                  >
                    <img className="avatar" src="https://api.dicebear.com/7.x/adventurer/svg?seed=User" alt="avatar" />
                    <div className="user-info">
                      <div className="user-name">{user.name}</div>
                      <div className="user-status">Requesting ({user.requests})</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Chat Window */}
            <div className="chat-window-panel">
              <div className="chat-header">
                <span className="chat-user-info">
                  {selectedUserData?.name} ({selectedUserData?.phone})
                </span>
                <div className="chat-actions">
                  <button className="transfer-btn">Transfer To ▼</button>
                  <button className="resolve-btn">Resolve</button>
                </div>
              </div>
              
              <div className="chat-messages" id="chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`message ${msg.type}`}>
                    <div className="message-bubble">{msg.text}</div>
                    <div className="message-meta">{msg.time} · {msg.status}</div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="message received">
                    <div className="typing-indicator">
                      <span>{selectedUserData?.name} is typing</span>
                      <div className="typing-dots">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="chat-input-container">
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    className="chat-input" 
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button className="send-btn" onClick={handleSendMessage} disabled={!message.trim()}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Chat Profile */}
            <div className="chat-profile-panel">
              <div className="profile-avatar">
                <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=User" alt="avatar" />
                <div className="profile-name">{selectedUserData?.name}</div>
                <div className="profile-phone">{selectedUserData?.phone}</div>
              </div>
              
              <div className="profile-status-box">
                <div className="profile-status-row">
                  <span className="status-label">Status</span>
                  <span className="status-value">Intervened</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Intervened By</span>
                  <span className="status-value">NITA INFOTECH</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Template Messages</span>
                  <span className="status-value">0</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Session Messages</span>
                  <span className="status-value">{messages.length}</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Unresolved Queries</span>
                  <span className="status-value">0</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">First Message</span>
                  <span className="status-value">....</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">WA Conversation</span>
                  <span className="status-value">Active</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">MAU Status</span>
                  <span className="status-value">Active</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Incoming</span>
                  <span className="status-value">Allowed</span>
                </div>
                <div className="profile-status-row">
                  <span className="status-label">Opted In</span>
                  <span className="status-value">
                    <label className="toggle-switch">
                      <input type="checkbox" checked readOnly />
                      <span className="toggle-slider"></span>
                    </label>
                  </span>
                </div>
              </div>
              
              <div className="profile-tags">
                <select className="tags-select">
                  <option>Tages</option>
                </select>
              </div>
              
              <button className="block-btn">Block Incoming Message</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
