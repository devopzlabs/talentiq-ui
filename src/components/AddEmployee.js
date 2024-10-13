import React, { useState } from "react";
import "./AddEmployee.css";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employeeSlice";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    linkedInURL: "",
    hobbies: "",
    address: "",
    interestedJobLocation: "",
    bio: "",
    skills: "",
    experience: [],
    education: [],
    certificates: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleAddExperience = () => {
    setEmployeeDetails({
      ...employeeDetails,
      experience: [
        ...employeeDetails.experience,
        { companyName: "", role: "", startDate: "", endDate: "", jobDuties: "", location: "" },
      ],
    });
  };

  const handleAddEducation = () => {
    setEmployeeDetails({
      ...employeeDetails,
      education: [
        ...employeeDetails.education,
        { courseName: "", degreeName: "", major: "", score: "", startDate: "", endDate: "", location: "" },
      ],
    });
  };

  const handleAddCertificate = () => {
    setEmployeeDetails({
      ...employeeDetails,
      certificates: [
        ...employeeDetails.certificates,
        { certificateName: "", completionDate: "" },
      ],
    });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...employeeDetails.experience];
    updatedExperience[index][name] = value;
    setEmployeeDetails({ ...employeeDetails, experience: updatedExperience });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...employeeDetails.education];
    updatedEducation[index][name] = value;
    setEmployeeDetails({ ...employeeDetails, education: updatedEducation });
  };

  const handleCertificateChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertificates = [...employeeDetails.certificates];
    updatedCertificates[index][name] = value;
    setEmployeeDetails({ ...employeeDetails, certificates: updatedCertificates });
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      ...employeeDetails,
      id: Math.random().toString(36).substring(7),
      skills: employeeDetails.skills.split(", "),
    };
    dispatch(addEmployee(newEmployee));
    navigate('/employee-profile');
  };

  return (
    <div className="add-employee">
      <div className="employee-header">
        <div className="profile-pic-placeholder">{employeeDetails.firstName.charAt(0)}{employeeDetails.lastName.charAt(0)}</div>
        <h2>Add New Employee</h2>
      </div>
      <div className="form-container">
        <div className="left-section">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={employeeDetails.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={employeeDetails.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dateOfBirth" value={employeeDetails.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={employeeDetails.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" value={employeeDetails.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>LinkedIn URL</label>
            <input type="text" name="linkedInURL" value={employeeDetails.linkedInURL} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={employeeDetails.address} onChange={handleChange} />
          </div>
        </div>
        <div className="right-section">
          <div className="form-group">
            <label>Interested Job Location</label>
            <input type="text" name="interestedJobLocation" value={employeeDetails.interestedJobLocation} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Hobbies</label>
            <input type="text" name="hobbies" value={employeeDetails.hobbies} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea name="bio" value={employeeDetails.bio} onChange={handleChange} placeholder="Example: John Doe, born on January 1, 1990, lives at 123 Main St, interested in software development, enjoys hiking and reading..."></textarea>
          </div>
          <div className="form-group">
            <label>Skills (comma separated)</label>
            <input type="text" name="skills" value={employeeDetails.skills} onChange={handleChange} />
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <div className="experience-section">
        <h4>Experience</h4>
        {employeeDetails.experience.map((exp, index) => (
          <div key={index} className="form-group experience-group">
            <label>Company Name</label>
            <input type="text" name="companyName" value={exp.companyName} onChange={(e) => handleExperienceChange(index, e)} />
            <label>Role</label>
            <input type="text" name="role" value={exp.role} onChange={(e) => handleExperienceChange(index, e)} />
            <label>Start Date</label>
            <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleExperienceChange(index, e)} />
            <label>End Date</label>
            <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleExperienceChange(index, e)} />
            <label>Job Duties</label>
            <textarea name="jobDuties" value={exp.jobDuties} onChange={(e) => handleExperienceChange(index, e)}></textarea>
            <label>Location</label>
            <input type="text" name="location" value={exp.location} onChange={(e) => handleExperienceChange(index, e)} />
          </div>
        ))}
        <button className="add-button" onClick={handleAddExperience}><FaPlus /> Add Experience</button>
      </div>
      {/* Education Section */}
      <div className="education-section">
        <h4>Education</h4>
        {employeeDetails.education.map((edu, index) => (
          <div key={index} className="form-group education-group">
            <label>Course Name</label>
            <input type="text" name="courseName" value={edu.courseName} onChange={(e) => handleEducationChange(index, e)} />
            <label>Degree Name</label>
            <input type="text" name="degreeName" value={edu.degreeName} onChange={(e) => handleEducationChange(index, e)} />
            <label>Major</label>
            <input type="text" name="major" value={edu.major} onChange={(e) => handleEducationChange(index, e)} />
            <label>Score</label>
            <input type="text" name="score" value={edu.score} onChange={(e) => handleEducationChange(index, e)} />
            <label>Start Date</label>
            <input type="date" name="startDate" value={edu.startDate} onChange={(e) => handleEducationChange(index, e)} />
            <label>End Date</label>
            <input type="date" name="endDate" value={edu.endDate} onChange={(e) => handleEducationChange(index, e)} />
            <label>Location</label>
            <input type="text" name="location" value={edu.location} onChange={(e) => handleEducationChange(index, e)} />
          </div>
        ))}
        <button className="add-button" onClick={handleAddEducation}><FaPlus /> Add Education</button>
      </div>
      {/* Certificate Section */}
      <div className="certificate-section">
        <h4>Certificates</h4>
        {employeeDetails.certificates.map((cert, index) => (
          <div key={index} className="form-group certificate-group">
            <label>Certificate Name</label>
            <input type="text" name="certificateName" value={cert.certificateName} onChange={(e) => handleCertificateChange(index, e)} />
            <label>Completion Date</label>
            <input type="date" name="completionDate" value={cert.completionDate} onChange={(e) => handleCertificateChange(index, e)} />
          </div>
        ))}
        <button className="add-button" onClick={handleAddCertificate}><FaPlus /> Add Certificate</button>
      </div>
      <button className="submit-button" onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default AddEmployee;