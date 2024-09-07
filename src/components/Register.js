import React from 'react';
import './auth.css'; // Use this for both login and register styles

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Email" required />
          <label>Password:</label>
          <input type="password" placeholder="Password" required />
          <label>Phone:</label>
          <input type="text" placeholder="Phone" required />
          <button type="submit" className="auth-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
