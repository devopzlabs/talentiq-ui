import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavBar from "./components/TopNavBar";
import Dashboard from "./components/Dashboard";
import VendorDetails from "./components/VendorDetails";
import EmployeeProfile from "./components/EmployeeProfile";
import VendorManagement from "./components/VendorManagement";
import JobBoard from "./components/JobBoard";
import JobDetails from "./components/JobDetails";
import AddJob from "./components/AddJob";
import AddEmployee from "./components/AddEmployee";
import AddVendor from "./components/AddVendor";
import AIScreener from "./components/AIScreener";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <TopNavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/vendor-management" element={<VendorManagement />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add-vendor" element={<AddVendor />} />
            <Route path="/vendor/:vendorId" element={<VendorDetails />} />
            <Route path="/ai-screener" element={<AIScreener />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
