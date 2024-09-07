// src/pages/AddPlans.js
import React, { useState } from 'react';
import '../App.css'; // Import your CSS file

function AddPlans() {
  const [plan, setPlan] = useState({
    planName: '',
    planType: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Plan added:', plan);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">TELSTAR</div>
      </header>

      <main>
        <h1>Add Plans</h1>
        <form onSubmit={handleSubmit} className="form-container-vertical">
          <input
            type="text"
            name="planName"
            placeholder="Plan Name"
            value={plan.planName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="planType"
            placeholder="Plan Type (e.g., Prepaid, Postpaid)"
            value={plan.planType}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Plan Description"
            value={plan.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={plan.price}
            onChange={handleChange}
            required
          />
          <button type="submit" className="admin-button">Add Plan</button>
        </form>
      </main>
    </div>
  );
}

export default AddPlans;
