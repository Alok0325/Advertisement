import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OTP.css';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(59);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    setIsResendDisabled(true);
    setTimeLeft(59);
    
    // Reset timer after 1 second
    setTimeout(() => {
      setIsResendDisabled(false);
    }, 1000);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length !== 4) {
      alert('Please enter complete OTP');
      return;
    }

    // Navigate to dashboard
    navigate('/dashboard');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="otp-container">
      {/* Left Side - Video Background */}
      <div className="otp-left">
        <div className="video-background">
          <div className="video-overlay">
            <div className="play-button">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="otp-right">
        <div className="otp-form-container">
          {/* Back Link */}
          <Link to="/login" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back
          </Link>

          {/* Welcome Section */}
          <div className="welcome-section">
            <h1>Welcome Back!</h1>
            <h2>Login to</h2>
            <p>OTP sent over email trs***@gmail.com and whatsapp 94******12</p>
          </div>

          {/* OTP Form */}
          <form className="otp-form" onSubmit={handleVerifyOTP}>
            {/* OTP Input Fields */}
            <div className="otp-input-group">
              <label>Enter OTP</label>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="otp-input"
                    placeholder="0"
                  />
                ))}
              </div>
            </div>

            {/* Timer */}
            <div className="timer-section">
              <div className="timer">
                <i className="fas fa-clock"></i>
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Resend OTP */}
            <div className="resend-section">
              <span>Didn't receive code? </span>
              <button
                type="button"
                className={`resend-link ${isResendDisabled ? 'disabled' : ''}`}
                onClick={handleResendOTP}
                disabled={isResendDisabled}
              >
                Resend OTP
              </button>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="verify-button"
              disabled={otp.join('').length !== 4}
            >
              Verify OTP
            </button>
          </form>

          {/* Additional Links */}
          <div className="otp-links">
            <Link to="/login" className="back-to-login">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP; 