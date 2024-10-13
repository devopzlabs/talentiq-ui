import React from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaBuilding, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">TalentIQ</div>
      <ul className="sidebar-menu">
        <li><Link to="/" className="sidebar-link"><FaHome /> Dashboard</Link></li>
        <li><Link to="/employee-profile" className="sidebar-link"><FaUser /> Employee Profile</Link></li>
        <li><Link to="/vendor-management" className="sidebar-link"><FaBuilding /> Vendor Management</Link></li>
        <li><Link to="/job-board" className="sidebar-link"><FaBriefcase /> Job Board</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;