import React, { useState } from "react";
import "./JobBoard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobBoard = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const navigate = useNavigate();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    companyName: "",
    location: "",
    jobType: "",
  });

  const handleViewJobDetails = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  // Function to handle "Create New" button click
  const handleCreateNewJob = () => {
    navigate("/add-job");
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

  // Function to filter jobs based on the current filters
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.title === "" || job.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.companyName === "" || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
      (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.jobType === "" || job.jobType.toLowerCase().includes(filters.jobType.toLowerCase()))
    );
  });

  return (
    <div className="job-board">
      <div className="header-section">
        <h2>Job Board</h2>
        <button className="create-new-button" onClick={handleCreateNewJob}>
          Create New Job
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
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={filters.title}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={filters.companyName}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="jobType">Job Type:</label>
              <input
                type="text"
                id="jobType"
                name="jobType"
                value={filters.jobType}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* Job Table Section */}
      {filteredJobs.length === 0 ? (
        <div>No jobs available</div>
      ) : (
        <table className="job-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Job Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr
                key={job.id}
                className="job-row"
                onClick={() => handleViewJobDetails(job.id)}
              >
                <td>{job.title}</td>
                <td>{job.companyName}</td>
                <td>{job.location}</td>
                <td>{job.jobType}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the row click from firing
                      handleViewJobDetails(job.id);
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobBoard;
