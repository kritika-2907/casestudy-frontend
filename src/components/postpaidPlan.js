// src/pages/PostpaidPlans.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook for navigation

function PostpaidPlans() {
  const navigate = useNavigate();

  const plans = [
    { name: 'PLAN A', description: 'Unlimited Calls', price: 50 },
    { name: 'PLAN B', description: 'Family Pack', price: 70 },
    { name: 'PLAN C', description: 'Data Saver', price: 40 },
    { name: 'PLAN D', description: 'Premium Plan', price: 100 },
  ];

  const handleBuyPlan = (planDetails) => {
    // Navigate to Invoice page with selected plan details
    navigate('/invoice', { state: { planDetails } });
  };

  return (
    <div className="container">
      <header>
        <div className="logo">TELSTAR</div>
      </header>

      <main>
        <h1>Postpaid Plans</h1>
        <p>Select a plan that suits you best.</p>

        <div className="plans-container">
          {plans.map((plan) => (
            <div className="plan" key={plan.name}>
              <h3>{plan.name}</h3>
              <h4>{plan.description}</h4>
              <p>Price: Rs{plan.price}</p>
              <div className="buttonplace">
                <button onClick={() => handleBuyPlan(plan)}>Buy Plan</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PostpaidPlans;
