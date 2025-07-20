import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    companyName: '',
    brandName: '',
    gstNumber: '',
    address: '',
    website: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard after successful registration
      navigate('/dashboard');
    }, 2000);
  };

  const handleCheckEmail = async (e) => {
    e.preventDefault();
    if (!checkEmail) {
      alert('Please enter an email to check');
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      alert(`Email ${checkEmail} is available for registration!`);
    }, 1500);
  };

  return (
    <div className="register-container">
      {/* Left Side - Video Background */}
      <div className="register-left">
        <div className="video-background">
          <div className="video-overlay">
            <div className="play-button">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
        
        {/* Note Section */}
        <div className="note-section">
          <p className="note-text">
            Note: If any Doubt or Need Assistance kindly Call us Now
          </p>
        </div>
        
        {/* Check Verification Section */}
        <div className="check-section">
          <h3>Check Are you verified for use platform (or Dashboard) or Your Project is Ready</h3>
          <form className="check-form" onSubmit={handleCheckEmail}>
            <div className="check-input-group">
              <input
                type="email"
                value={checkEmail}
                onChange={(e) => setCheckEmail(e.target.value)}
                placeholder="Enter email id"
                className="check-input"
                required
              />
              <button
                type="submit"
                className={`check-button ${isChecking ? 'loading' : ''}`}
                disabled={isChecking}
              >
                {isChecking ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Checking...
                  </>
                ) : (
                  'Check'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="register-right">
        <div className="register-form-container">
          {/* Back Link */}
          <Link to="/login" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back
          </Link>

          {/* Title Section */}
          <div className="title-section">
            <h1>Register</h1>
            <p>Lorem Ipsum is simply</p>
          </div>

          {/* Registration Form */}
          <form className="register-form" onSubmit={handleSubmit}>
            {/* Your Name */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="form-input"
              />
            </div>

            {/* Contact No. */}
            <div className="form-group">
              <label htmlFor="contact">Contact No.</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter contact no."
                required
                className="form-input"
              />
            </div>

            {/* Email ID */}
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email id"
                required
                className="form-input"
              />
            </div>

            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter company name"
                required
                className="form-input"
              />
            </div>

            {/* Brand Name */}
            <div className="form-group">
              <label htmlFor="brandName">Brand Name</label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
                placeholder="Enter brand name"
                required
                className="form-input"
              />
            </div>

            {/* GST Number */}
            <div className="form-group">
              <label htmlFor="gstNumber">GST Number</label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
                placeholder="Enter GST number"
                required
                className="form-input"
              />
            </div>

            {/* Address with Pin code */}
            <div className="form-group">
              <label htmlFor="address">Address with Pin code</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address with pin code"
                required
                className="form-textarea"
                rows="3"
              />
            </div>

            {/* Company Website */}
            <div className="form-group">
              <label htmlFor="website">Company Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Enter company website"
                className="form-input"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Registering...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>

          {/* Additional Links */}
          <div className="register-links">
            <div className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
