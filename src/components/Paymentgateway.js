// src/pages/Payment.js
import React, { useState } from 'react';
import '../App.css'; // Import your CSS file

function Payment() {
  const [selectedOption, setSelectedOption] = useState('UPI');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
    netBanking: '',
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details Submitted:', selectedOption, paymentDetails);
    // Here you would integrate with an actual payment gateway API
  };

  return (
    <div className="container">
      <header>
        <div className="logo">TELSTAR</div>
      </header>

      <main>
        <h1>Select Payment Method</h1>
        <form onSubmit={handleSubmit} className="form-container-vertical">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="UPI"
              checked={selectedOption === 'UPI'}
              onChange={handleOptionChange}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Credit Card"
              checked={selectedOption === 'Credit Card'}
              onChange={handleOptionChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Debit Card"
              checked={selectedOption === 'Debit Card'}
              onChange={handleOptionChange}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Net Banking"
              checked={selectedOption === 'Net Banking'}
              onChange={handleOptionChange}
            />
            Net Banking
          </label>

          {/* Render input fields based on selected payment option */}
          {selectedOption === 'UPI' && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter UPI ID"
              value={paymentDetails.upiId}
              onChange={handleInputChange}
              required
            />
          )}

          {(selectedOption === 'Credit Card' || selectedOption === 'Debit Card') && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="cardHolder"
                placeholder="Card Holder Name"
                value={paymentDetails.cardHolder}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="expiry"
                placeholder="Expiry Date (MM/YY)"
                value={paymentDetails.expiry}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          {selectedOption === 'Net Banking' && (
            <input
              type="text"
              name="netBanking"
              placeholder="Enter Bank Name"
              value={paymentDetails.netBanking}
              onChange={handleInputChange}
              required
            />
          )}

          <button type="submit" className="admin-button">Proceed to Pay</button>
        </form>
      </main>
    </div>
  );
}

export default Payment;
