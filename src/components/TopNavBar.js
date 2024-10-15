import React from "react";
import "./TopNavBar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const TopNavBar = () => {
  const location = useLocation();

  const renderBreadcrumb = () => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const breadcrumbItems = pathParts.map((part, index) => {
      const path = `/${pathParts.slice(0, index + 1).join("/")}`;
      return (
        <span key={index}>
          <Link to={path}>{part.replace(/-/g, " ").toUpperCase()}</Link>
          {index < pathParts.length - 1 && " > "}
        </span>
      );
    });

    return (
      <div className="breadcrumb">
        <Link to="/">HOME</Link>
        {pathParts.length > 0 && " > "}
        {breadcrumbItems}
      </div>
    );
  };

  return (
    <div className="top-navbar">
      <div className="breadcrumb-container">{renderBreadcrumb()}</div>
      <div className="nav-items">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default TopNavBar;
