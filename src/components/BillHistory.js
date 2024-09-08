// src/pages/BillHistory.js
import React from 'react';
import { Link } from 'react-router-dom';

function BillHistory() {
  const bills = [
    { id: 1, date: '2024-07-15', amount: '$50.00', status: 'Paid' },
    { id: 2, date: '2024-08-15', amount: '$45.00', status: 'Paid' },
    { id: 3, date: '2024-09-15', amount: '$55.00', status: 'Unpaid' },
  ];

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#f2f2f2',
  };

  const backButtonStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#00d1b2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1>Bill History</h1>
      <p>Here is a list of all your previous bills:</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...headerStyle }}>Date</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Amount</th>
            <th style={{ ...thTdStyle, ...headerStyle }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td style={thTdStyle}>{bill.date}</td>
              <td style={thTdStyle}>{bill.amount}</td>
              <td style={thTdStyle}>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Link back to the logged-in landing page */}
      <Link to="/loggedinloginpage">
        <button style={backButtonStyle}>Back to Home</button>
      </Link>
    </div>
  );
}

export default BillHistory;
