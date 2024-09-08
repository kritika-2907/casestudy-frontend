// src/pages/LoggedInLandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS file

function LoggedInLandingPage() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space between the logo and buttons
    alignItems: 'center', // Align items vertically in the center
    padding: '10px 20px', // Adjust padding for spacing
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '10px', // Space between buttons
  };

  return (
    <div className="container">
      <header style={headerStyle}>
        <div className="logo">TELSTAR</div>
        <nav style={buttonGroupStyle}>
          {/* Navigation for logged-in user */}
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          {/* New Bill History button */}
          <Link to="/bill-history">
            <button>Bill History</button>
          </Link>
          <Link to="/logout">
            <button>Log Out</button>
          </Link>
          <button className="menu-icon">☰</button>
        </nav>
      </header>

      <main>
        <h1>Welcome Back!</h1>
        <p>Continue exploring our exclusive offers and plans.</p>

        <h2>Featured Plans</h2>
        <div className="plans-container">
          <div className="plan">
            <h3>PREPAID</h3>
            <h4>Pay As You Go!</h4>
            <p>Ideal for: Students, light users, and anyone who prefers control over their expenses.</p>
            <div className='buttonplace'>
              {/* Navigating to prepaid plans */}
              <Link to="/prepaid">
                <button>→</button>
              </Link>
            </div>
          </div>
          <div className="plan">
            <h3>POSTPAID</h3>
            <h4>Unlimited Convenience!</h4>
            <p>Ideal for: Professionals, families, and heavy users who want uninterrupted services and bundled benefits.</p>
            <div className="buttonplace">
              {/* Navigating to postpaid plans */}
              <Link to="/postpaid">
                <button>→</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoggedInLandingPage;
