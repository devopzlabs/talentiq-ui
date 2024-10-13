import React from "react";
import "./TopNavBar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="search-bar">
        {/* <input type="text" placeholder="Search..." /> */}
      </div>
      <div className="nav-items">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default TopNavBar;