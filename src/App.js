import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import PostpaidPlan from './components/postpaidPlan';
import PrepaidPlan from './components/PrepaidPlan';
import AdminDashboard from './components/AdminDashboard';
import AddPlans from './components/AddPlans';
import AddCustomer from './components/AddCustomer';
import Invoice from './components/Invoice';
import PaymentGateway from './components/Paymentgateway';
import LoggedInLandingPage from './components/LoggedInLoginpage';
import LoggedOutPage from './components/LoggedOut';
import BillHistory from './components/BillHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postpaid" element={<PostpaidPlan/>}/>
        <Route path="/prepaid" element={<PrepaidPlan/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/addplans" element={<AddPlans/>}/>
        <Route path="/addCustomer" element={<AddCustomer/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/payment-gateway" element={<PaymentGateway/>}/>
        <Route path="/loggedinloginpage" element={<LoggedInLandingPage/>}/>
        <Route path="/logout" element={<LoggedOutPage/>}/>
        <Route path="/bill-history" element={<BillHistory/>}/>
      </Routes>
    </Router>
  );
}

export default App;
