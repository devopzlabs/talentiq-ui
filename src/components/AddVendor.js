import React, { useState } from "react";
import "./AddVendor.css";
import { useDispatch } from "react-redux";
import { addVendor } from "../features/vendorSlice";
import { useNavigate } from "react-router-dom";

const AddVendor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vendorDetails, setVendorDetails] = useState({
    name: "",
    contactEmail: "",
    industry: "",
    requiredSkills: "",
    websiteURL: "",
    contractStartDate: "",
    contractEndDate: "",
    commissionPercentage: "",
    relationshipManager: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails({ ...vendorDetails, [name]: value });
  };

  const handleAddVendor = () => {
    const newVendor = {
      ...vendorDetails,
      id: Math.random().toString(36).substring(7),
    };
    dispatch(addVendor(newVendor));
    navigate('/vendor-management');
  };

  return (
    <div className="add-vendor">
      <h2>Add New Vendor</h2>
      <div className="form-group">
        <label>Vendor Name</label>
        <input type="text" name="name" value={vendorDetails.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Contact Email (comma separated)</label>
        <input type="text" name="contactEmail" value={vendorDetails.contactEmail} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Industry</label>
        <input type="text" name="industry" value={vendorDetails.industry} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Required Skills (comma separated)</label>
        <input type="text" name="requiredSkills" value={vendorDetails.requiredSkills} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Website URL</label>
        <input type="text" name="websiteURL" value={vendorDetails.websiteURL} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Contract Start Date</label>
        <input type="date" name="contractStartDate" value={vendorDetails.contractStartDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Contract End Date</label>
        <input type="date" name="contractEndDate" value={vendorDetails.contractEndDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Commission Percentage</label>
        <input type="number" name="commissionPercentage" value={vendorDetails.commissionPercentage} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Relationship Manager</label>
        <input type="text" name="relationshipManager" value={vendorDetails.relationshipManager} onChange={handleChange} />
      </div>
      <button onClick={handleAddVendor}>Add Vendor</button>
    </div>
  );
};

export default AddVendor;