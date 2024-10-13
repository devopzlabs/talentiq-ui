/** VendorDetails.js */

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./VendorDetails.css";

const VendorDetails = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const vendors = useSelector((state) => state.vendor.vendors);
  const jobs = useSelector((state) => state.job.jobs);

  const vendor = vendors.find((v) => v.id === vendorId);
  const vendorJobs = jobs.filter((job) => job.companyName === vendor?.name);

  const handlePostJobForVendor = () => {
    navigate('/add-job', { state: { companyName: vendor.name } });
  };

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className="vendor-details">
      <h2>{vendor.name}</h2>
      <p><strong>Industry:</strong> {vendor.industry}</p>
      <p><strong>Contact Emails:</strong> {vendor.contactEmails}</p>
      <p><strong>Required Skills:</strong> {vendor.requiredSkills}</p>
      <p><strong>Website:</strong> <a href={vendor.websiteURL} target="_blank" rel="noopener noreferrer">{vendor.websiteURL}</a></p>
      <p><strong>Contract Start Date:</strong> {vendor.contractStartDate}</p>
      <p><strong>Contract End Date:</strong> {vendor.contractEndDate}</p>
      <p><strong>Commission Percentage:</strong> {vendor.commissionPercentage}</p>
      <p><strong>Relationship Manager:</strong> {vendor.relationshipManager}</p>

      <h3>Jobs Posted by {vendor.name}</h3>
      {vendorJobs.length > 0 ? (
        <ul>
          {vendorJobs.map((job) => (
            <li key={job.id}>
              <a href="" onClick={() => navigate(`/job-details/${job.id}`)}>{job.title} - {job.location}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted for this vendor.</p>
      )}

      <button onClick={handlePostJobForVendor}>Post Job for {vendor.name}</button>
    </div>
  );
};

export default VendorDetails;