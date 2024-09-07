import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../App.css'; // Import your CSS file

function LandingPage() {
  return (
    <div className="container">
      <header>
        <div className="logo">TELSTAR</div>
        <nav>
          {/* Use Link components to navigate */}
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/register">
            <button>Get Started</button>
          </Link>
          <button className="menu-icon">☰</button>
        </nav>
      </header>

      <main>
        <h1>Connecting Lives on Fingertips.</h1>
        <p>Get Exclusive offers on purchase of any plans</p>

        <h2>Featured Plans</h2>
        <div className="plans-container">
          <div className="plan">
            <h3>PREPAID</h3>
            <h4>Pay As You Go!</h4>
            <p>Ideal for: Students, light users, and anyone who prefers control over their expenses.</p>
            <div className='buttonplace'>
              {/* Add functionality to navigate using Link */}
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

export default LandingPage;
