import React from "react";
import "./EmployeeProfile.css";
import { useSelector } from "react-redux";

const EmployeeProfile = () => {
  const employees = useSelector((state) => state.employee.profiles);

  if (!employees || employees.length === 0) {
    return <div>No employee profiles available</div>;
  }

  return (
    <div className="employee-profile">
      <h2>Employee Profile</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="profile-section">
          <h3>{employee.firstName} {employee.lastName}</h3>
          <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>LinkedIn URL:</strong> <a href={employee.linkedInURL} target="_blank" rel="noopener noreferrer">{employee.linkedInURL}</a></p>
          <p><strong>Hobbies:</strong> {employee.hobbies}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Interested Job Location:</strong> {employee.interestedJobLocation}</p>
          <p><strong>Bio:</strong> {employee.bio}</p>
          
          <h4>Skills</h4>
          <ul>
            {employee.skills && employee.skills.length > 0 ? (
              employee.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </ul>

          <h4>Experience</h4>
          {employee.experience && employee.experience.length > 0 ? (
            employee.experience.map((exp, index) => (
              <div key={index} className="experience-section">
                <p><strong>Company Name:</strong> {exp.companyName}</p>
                <p><strong>Role:</strong> {exp.role}</p>
                <p><strong>Start Date:</strong> {exp.startDate}</p>
                <p><strong>End Date:</strong> {exp.endDate}</p>
                <p><strong>Job Duties:</strong> {exp.jobDuties}</p>
                <p><strong>Location:</strong> {exp.location}</p>
              </div>
            ))
          ) : (
            <p>No experience available</p>
          )}

          <h4>Education</h4>
          {employee.education && employee.education.length > 0 ? (
            employee.education.map((edu, index) => (
              <div key={index} className="education-section">
                <p><strong>Course Name:</strong> {edu.courseName}</p>
                <p><strong>Degree Name:</strong> {edu.degreeName}</p>
                <p><strong>Major:</strong> {edu.major}</p>
                <p><strong>Score:</strong> {edu.score}</p>
                <p><strong>Start Date:</strong> {edu.startDate}</p>
                <p><strong>End Date:</strong> {edu.endDate}</p>
                <p><strong>Location:</strong> {edu.location}</p>
              </div>
            ))
          ) : (
            <p>No education available</p>
          )}

          <h4>Certificates</h4>
          {employee.certificates && employee.certificates.length > 0 ? (
            employee.certificates.map((cert, index) => (
              <div key={index} className="certificate-section">
                <p><strong>Certificate Name:</strong> {cert.certificateName}</p>
                <p><strong>Completion Date:</strong> {cert.completionDate}</p>
              </div>
            ))
          ) : (
            <p>No certificates available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeProfile;
