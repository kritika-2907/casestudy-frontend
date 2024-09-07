import React from 'react';
import './auth.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Email" required />
          <label>Password:</label>
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn"><Link to="/loggedinloginpage">Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
