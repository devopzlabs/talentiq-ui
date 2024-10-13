import React from "react";
import "./VendorManagement.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VendorManagement = () => {
  const vendors = useSelector((state) => state.vendor.vendors);
  const jobs = useSelector((state) => state.job.jobs);
  const navigate = useNavigate();

  const handleViewVendorDetails = (vendorId) => {
    navigate(`/vendor/${vendorId}`);
  };

  const handleAddVendor = () => {
    navigate('/add-vendor');
  };

  return (
    <div className="vendor-management">
      <h2>Vendor Management</h2>
      {vendors.map((vendor) => (
        <div key={vendor.id} className="vendor-section">
          <h3>{vendor.name}</h3>
          <p><strong>Contact Email:</strong> {vendor.contactEmails}</p>
          <p><strong>Industry:</strong> {vendor.industry}</p>
          <p><strong>Required Skills:</strong> {vendor.requiredSkills}</p>
          <p><strong>Website:</strong> <a href={vendor.websiteURL} target="_blank" rel="noopener noreferrer">{vendor.websiteURL}</a></p>
          <p><strong>Contract Start Date:</strong> {vendor.contractStartDate}</p>
          <p><strong>Contract End Date:</strong> {vendor.contractEndDate}</p>
          <p><strong>Commission Percentage:</strong> {vendor.commissionPercentage}%</p>
          <p><strong>Relationship Manager:</strong> {vendor.relationshipManager}</p>
          <button onClick={() => handleViewVendorDetails(vendor.id)}>View Vendor Details</button>
        </div>
      ))}
      <button onClick={handleAddVendor}>Add Vendor</button>
    </div>
  );
};

export default VendorManagement;