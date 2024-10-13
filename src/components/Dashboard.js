import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  const handleAddVendor = () => {
    navigate('/add-vendor');
  };

  const handlePostJob = () => {
    navigate('/add-job');
  };

  return (
    <div className="dashboard">
      <h2>Welcome to TalentIQ Dashboard</h2>
      <p>Your go-to platform for managing employees, vendors, and job postings.</p>
      <div className="dashboard-buttons">
        <button onClick={handleAddEmployee}>Add Employee</button>
        <button onClick={handleAddVendor}>Create Vendor</button>
        <button onClick={handlePostJob}>Post Job</button>
      </div>
    </div>
  );
};

export default Dashboard;