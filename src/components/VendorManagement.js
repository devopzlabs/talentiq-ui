import React, { useState } from "react";
import "./VendorManagement.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VendorManagement = () => {
  const vendors = useSelector((state) => state.vendor.vendors);
  const navigate = useNavigate();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    industry: "",
    requiredSkills: "",
    relationshipManager: "",
  });

  const handleViewVendorDetails = (vendorId) => {
    navigate(`/vendor/${vendorId}`);
  };

  // Function to handle "Create New Vendor" button click
  const handleCreateNewVendor = () => {
    navigate("/add-vendor");
  };

  // Function to toggle filter visibility
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  // Function to handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to filter vendors based on the current filters
  const filteredVendors = vendors.filter((vendor) => {
    return (
      (filters.name === "" || vendor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.industry === "" || vendor.industry.toLowerCase().includes(filters.industry.toLowerCase())) &&
      (filters.requiredSkills === "" || vendor.requiredSkills.toLowerCase().includes(filters.requiredSkills.toLowerCase())) &&
      (filters.relationshipManager === "" || vendor.relationshipManager.toLowerCase().includes(filters.relationshipManager.toLowerCase()))
    );
  });

  if (!vendors || vendors.length === 0) {
    return (
      <div className="vendor-management">
        <div className="header-section">
          <h2>Vendor Management</h2>
          <button className="create-new-button" onClick={handleCreateNewVendor}>
            Create New Vendor
          </button>
        </div>
        <div>No vendors available</div>
      </div>
    );
  }

  return (
    <div className="vendor-management">
      <div className="header-section">
        <h2>Vendor Management</h2>
        <button className="create-new-button" onClick={handleCreateNewVendor}>
          Create New Vendor
        </button>
      </div>

      {/* Collapsible Filters Section */}
      <div className="filter-section">
        <button className="toggle-filters-button" onClick={toggleFilters}>
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
        {filtersVisible && (
          <div className="filters">
            <div className="filter">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="industry">Industry:</label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={filters.industry}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="requiredSkills">Required Skills:</label>
              <input
                type="text"
                id="requiredSkills"
                name="requiredSkills"
                value={filters.requiredSkills}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="relationshipManager">Relationship Manager:</label>
              <input
                type="text"
                id="relationshipManager"
                name="relationshipManager"
                value={filters.relationshipManager}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        )}
      </div>

      <table className="vendor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Email</th>
            <th>Industry</th>
            <th>Required Skills</th>
            <th>Website</th>
            <th>Contract Start Date</th>
            <th>Contract End Date</th>
            <th>Commission Percentage</th>
            <th>Relationship Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map((vendor) => (
            <tr key={vendor.id} className="vendor-row" onClick={() => handleViewVendorDetails(vendor.id)}>
              <td>{vendor.name}</td>
              <td>{vendor.contactEmails}</td>
              <td>{vendor.industry}</td>
              <td>{vendor.requiredSkills}</td>
              <td>
                <a href={vendor.websiteURL} target="_blank" rel="noopener noreferrer">
                  {vendor.websiteURL}
                </a>
              </td>
              <td>{vendor.contractStartDate}</td>
              <td>{vendor.contractEndDate}</td>
              <td>{vendor.commissionPercentage}%</td>
              <td>{vendor.relationshipManager}</td>
              <td>
                <button onClick={(e) => { e.stopPropagation(); handleViewVendorDetails(vendor.id); }}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorManagement;