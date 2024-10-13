import React from "react";
import "./JobBoard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JobBoard = () => {
  const jobs = useSelector((state) => state.job.jobs);

  return (
    <div className="job-board">
      <h2>Job Board</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job-posting">
          <div className="job-header">
            <h3>{job.title}</h3>
            <p className="company-name">{job.companyName}</p>
          </div>
          <p className="job-location"><strong>Location:</strong> {job.location}</p>
          <p className="job-type"><strong>Job Type:</strong> {job.jobType}</p>
          <Link to={`/job-details/${job.id}`} className="view-details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobBoard;
