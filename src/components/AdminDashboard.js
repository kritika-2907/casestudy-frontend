// src/pages/AdminDashboard.js
import React from 'react';
import '../App.css'; // Import your CSS file
import {Link} from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className="container">
      <header>
        <div className="logo">TELSTAR</div>
      </header>

      <main>
        <h1>Admin Dashboard</h1>
        <p>No user information available.</p>
        
        <div className="admin-actions">
          <button className="admin-button">
            <Link to="/addplans">Add Plans</Link>
            </button>
          <button className="admin-button">
            <Link to="/addcustomer">Add Customer</Link></button>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
