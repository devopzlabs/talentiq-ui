import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">{!isCollapsed && "TalentIQ"}</div>
        <button className="collapse-button" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
      <ul className="sidebar-menu">
        <li className={location.pathname === "/" ? "selected" : ""}>
          <Link to="/" className="sidebar-link">
            <FaHome />{" "}
            {!isCollapsed && <span className="link-text">Dashboard</span>}
          </Link>
        </li>
        <li
          className={
            location.pathname === "/employee-profile" ? "selected" : ""
          }
        >
          <Link to="/employee-profile" className="sidebar-link">
            <FaUser />{" "}
            {!isCollapsed && (
              <span className="link-text">Employee Profile</span>
            )}
          </Link>
        </li>
        <li
          className={
            location.pathname === "/vendor-management" ? "selected" : ""
          }
        >
          <Link to="/vendor-management" className="sidebar-link">
            <FaBuilding />{" "}
            {!isCollapsed && (
              <span className="link-text">Vendor Management</span>
            )}
          </Link>
        </li>
        <li className={location.pathname === "/job-board" ? "selected" : ""}>
          <Link to="/job-board" className="sidebar-link">
            <FaBriefcase />{" "}
            {!isCollapsed && <span className="link-text">Job Board</span>}
          </Link>
        </li>
<li className={location.pathname === "/ai-screener" ? "selected" : ""}>
  <Link to="/ai-screener" className="sidebar-link">
    <FaUser /> 
    {!isCollapsed && <span className="link-text">AI Screener</span>}
  </Link>
  {/* Questions subsection */}
  {!isCollapsed && (
    <ul>
      <li className={location.pathname === "/ai-screener/questions" ? "selected" : ""}>
        <Link to="/ai-screener" className="sidebar-link">
          {!isCollapsed && <span className="link-text">Question Bank</span>}
        </Link>
      </li>
    </ul>
  )}
</li>
</ul>
</div>
);
};
export default Sidebar;
