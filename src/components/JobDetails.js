import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const job = useSelector((state) =>
    state.job.jobs.find((job) => job.id === id)
  );

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company Name:</strong> {job.companyName}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.jobType}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Salary Range:</strong> {job.salaryRange}</p>
      <p><strong>Skills Required:</strong> {job.skills.join(", ")}</p>
      <p><strong>Posted On:</strong> {job.postedDate}</p>
      <p><strong>Apply By:</strong> {job.applyByDate}</p>
    </div>
  );
};

export default JobDetails;