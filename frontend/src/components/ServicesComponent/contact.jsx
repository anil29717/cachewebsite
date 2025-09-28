import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Use a simple background color
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    color: '#6b7280', // A muted gray color
  };

  const buttonStyle = {
    marginBottom: '1.5rem',
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const arrowStyle = {
    marginRight: '0.5rem',
    height: '1rem',
    width: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <button
          style={buttonStyle}
          onClick={() => navigate(-1)}
          data-testid="button-back"
        >
          <span style={arrowStyle}>←</span> Back
        </button>
        <h1 style={headingStyle}>Contact Page</h1>
        <p style={paragraphStyle}>
          This is a placeholder contact page. You can design your contact form here.
        </p>
      </div>
    </div>
  );
}