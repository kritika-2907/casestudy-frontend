// src/pages/Invoice.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for navigation

function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const planDetails = location.state?.planDetails; // Retrieve plan details from location state

  if (!planDetails) {
    return <p>Error: No plan selected!</p>;
  }

  const handlePayment = () => {
    // Simulate redirecting to payment gateway
    navigate('/payment-gateway', { state: { planDetails } });
  };

  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <div className="invoice-content">
      <p>Plan: {planDetails.name}</p>
      <p>Description: {planDetails.description}</p>
      <p>Price: ${planDetails.price}</p>
      <div className="button-container">
      <button className="pay-now-button" onClick={handlePayment}>Pay Now</button>
      </div>
      </div>
    </div>
  );
}

export default Invoice;
