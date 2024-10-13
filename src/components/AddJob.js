import React, { useState } from "react";
import "./AddJob.css";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../features/jobSlice";
import { useNavigate, useLocation } from "react-router-dom";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const vendors = useSelector((state) => state.vendor.vendors);

  const [jobDetails, setJobDetails] = useState({
    title: "",
    companyName: location.state?.companyName || (vendors.length > 0 ? vendors[0].name : ""),
    location: "",
    jobType: "",
    description: "",
    salaryRange: "",
    skills: "",
    postedDate: "",
    applyByDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleAddJob = () => {
    const newJob = {
      ...jobDetails,
      id: Math.random().toString(36).substring(7),
      skills: jobDetails.skills.split(", "),
    };
    dispatch(addJob(newJob));
    navigate('/job-board');
  };

  return (
    <div className="add-job">
      <h2>Post a New Job</h2>
      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" value={jobDetails.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <select name="companyName" value={jobDetails.companyName} onChange={handleChange}>
          {vendors.map((vendor) => (
            <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Location</label>
        <input type="text" name="location" value={jobDetails.location} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Job Type</label>
        <input type="text" name="jobType" value={jobDetails.jobType} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={jobDetails.description} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label>Salary Range</label>
        <input type="text" name="salaryRange" value={jobDetails.salaryRange} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Skills (comma separated)</label>
        <input type="text" name="skills" value={jobDetails.skills} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Posted Date</label>
        <input type="date" name="postedDate" value={jobDetails.postedDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Apply By Date</label>
        <input type="date" name="applyByDate" value={jobDetails.applyByDate} onChange={handleChange} />
      </div>
      <button onClick={handleAddJob}>Post Job</button>
    </div>
  );
};

export default AddJob;