                                    import React, { useState } from "react";
                                  import "./EmployeeProfile.css";
                       import { useSelector } from "react-redux";
   import { useNavigate } from "react-router-dom";

           const EmployeeProfile = () => {
              const [selectedEmployee, setSelectedEmployee] = useState(null);
                 const [filtersVisible, setFiltersVisible] = useState(false);
                  const [filters, setFilters] = useState({
                                        name: "",
                                        email: "",
                                        jobLocation: "",
                                        skills: "",
                                        jobStatus: "",
                                        employmentType: "",
                                      });
        const [activeTab, setActiveTab] = useState('systemInformation');

           const employees = useSelector((state) => state.employee.profiles);
                                      const navigate = useNavigate();

             // Function to handle when an employee's name is clicked
                                      const handleEmployeeClick = (employee) => {
          setSelectedEmployee(employee);
                                      };

    // Function to handle "Create New" button click
                                      const handleCreateNew = () => {
                                        navigate("/add-employee");
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

                    // Function to filter employees based on the current filters
                   const filteredEmployees = employees.filter((employee) => {
                                        return (
                                          (filters.name === "" ||
                      `${employee.firstName} ${employee.lastName}`
                                              .toLowerCase()
                                              .includes(filters.name.toLowerCase())) &&
                         (filters.email === "" ||
                                            employee.email.toLowerCase().includes(filters.email.toLowerCase())) &&
                                          (filters.jobLocation === "" ||
                                            employee.interestedJobLocation
                                              .toLowerCase()
                                              .includes(filters.jobLocation.toLowerCase())) &&
                                          (filters.skills === "" ||
                                            employee.skills
                                              .join(", ")
                                              .toLowerCase()
                                              .includes(filters.skills.toLowerCase())) &&
                                          (filters.jobStatus === "" || employee.jobStatus === filters.jobStatus) &&
                                          (filters.employmentType === "" ||
                                            employee.employmentType === filters.employmentType)
                                        );
                                      });

                                      return (
                                        <div className="employee-profile">
                                          {/* Header Section */}
                                          <div className="header-section">
                                            <h2>Employee Profile</h2>
             <button className="create-new-button" onClick={handleCreateNew}>
                                              Create New
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
                                                  <label htmlFor="email">Email:</label>
                                                  <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={filters.email}
                                                    onChange={handleFilterChange}
                                                  />
                                                </div>
                                                <div className="filter">
                                                  <label htmlFor="jobLocation">Interested Job Location:</label>
                                                  <input
                                                    type="text"
                                                    id="jobLocation"
                                                    name="jobLocation"
                                                    value={filters.jobLocation}
                                                    onChange={handleFilterChange}
                                                  />
                                                </div>
                                                <div className="filter">
                                                  <label htmlFor="skills">Skills:</label>
                                                  <input
                                                    type="text"
                                                    id="skills"
                                                    name="skills"
                                                    value={filters.skills}
                                                    onChange={handleFilterChange}
                                                  />
                                                </div>
                                                <div className="filter">
                                                  <label htmlFor="jobStatus">Job Status:</label>
                                                  <select
                                                    id="jobStatus"
                                                    name="jobStatus"
                                                    value={filters.jobStatus}
                                                    onChange={handleFilterChange}
                                                  >
                                                    <option value="">Select Job Status</option>
                                                    <option value="Open to Work">Open to Work</option>
                                                    <option value="Placed">Placed</option>
                                                    <option value="Not Available">Not Available</option>
                                                  </select>
                                                </div>
                                                <div className="filter">
                                                  <label htmlFor="employmentType">Employment Type:</label>
                                                  <select
                                                    id="employmentType"
                                                    name="employmentType"
                                                    value={filters.employmentType}
                                                    onChange={handleFilterChange}
                                                  >
                                                    <option value="">Select Employment Type</option>
                                                    <option value="Contractor">Contractor</option>
                                                    <option value="Full Time">Full Time</option>
                                                    <option value="Part Time">Part Time</option>
                                                  </select>
                                                </div>
                                              </div>
                                            )}
                                          </div>

                                          {selectedEmployee ? (
                                            <div className="profile-details">
                                              <h3>
                                                {selectedEmployee.firstName} {selectedEmployee.lastName}
                                              </h3>
                                              <p>
                                                <strong>Date of Birth:</strong> {selectedEmployee.dateOfBirth}
                                              </p>
                                              <p>
                                                <strong>Email:</strong> {selectedEmployee.email}
                                              </p>
                                              <p>
                                                <strong>Phone:</strong> {selectedEmployee.phone}
                                              </p>
                                              <p>
                                                <strong>LinkedIn URL:</strong>{" "}
                                                <a
                                                  href={selectedEmployee.linkedInURL}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  {selectedEmployee.linkedInURL}
                                                </a>
                                              </p>
                                              <p>
                                                <strong>Hobbies:</strong> {selectedEmployee.hobbies}
                                              </p>
                                              <p>
                                                <strong>Address:</strong> {selectedEmployee.address}
                                              </p>
                                              <p>
                                                <strong>Interested Job Location:</strong>{" "}
                                                {selectedEmployee.interestedJobLocation}
                                              </p>
                                              <p>
                                                <strong>Bio:</strong> {selectedEmployee.bio}
                                              </p>
                                              <p>
                                                <strong>Job Status:</strong> {selectedEmployee.jobStatus}
                                              </p>
                                              <p>
                                                <strong>Employment Type:</strong> {selectedEmployee.employmentType}
                                              </p>

                                              <h4>Skills</h4>
                                              <ul>
                                                {selectedEmployee.skills && selectedEmployee.skills.length > 0 ? (
                                                  selectedEmployee.skills.map((skill, index) => (
                                                    <li key={index}>{skill}</li>
                                                  ))
                                                ) : (
                                                  <p>No skills available</p>
                                                )}
                                              </ul>

                                              <h4>Experience</h4>
                                              {selectedEmployee.experience &&
                                              selectedEmployee.experience.length > 0 ? (
                                                selectedEmployee.experience.map((exp, index) => (
                                                  <div key={index} className="experience-section">
                                                    <p>
                                                      <strong>Company Name:</strong> {exp.companyName}
                                                    </p>
                                                    <p>
                                                      <strong>Role:</strong> {exp.role}
                                                    </p>
                                                    <p>
                                                      <strong>Start Date:</strong> {exp.startDate}
                                                    </p>
                                                    <p>
                                                      <strong>End Date:</strong> {exp.endDate}
                                                    </p>
                                                    <p>
                                                      <strong>Job Duties:</strong> {exp.jobDuties}
                                                    </p>
                                                    <p>
                                                      <strong>Location:</strong> {exp.location}
                                                    </p>
                                                  </div>
                                                ))
                                              ) : (
                                                <p>No experience available</p>
                                              )}

                                              <h4>Education</h4>
                                              {selectedEmployee.education &&
                                              selectedEmployee.education.length > 0 ? (
                                                selectedEmployee.education.map((edu, index) => (
                                                  <div key={index} className="education-section">
                                                    <p>
                                                      <strong>Course Name:</strong> {edu.courseName}
                                                    </p>
                                                    <p>
                                                      <strong>Degree Name:</strong> {edu.degreeName}
                                                    </p>
                                                    <p>
                                                      <strong>Major:</strong> {edu.major}
                                                    </p>
                                                    <p>
                                                      <strong>Score:</strong> {edu.score}
                                                    </p>
                                                    <p>
                                                      <strong>Start Date:</strong> {edu.startDate}
                                                    </p>
                                                    <p>
                                                      <strong>End Date:</strong> {edu.endDate}
                                                    </p>
                                                    <p>
                                                      <strong>Location:</strong> {edu.location}
                                                    </p>
                                                  </div>
                                                ))
                                              ) : (
                                                <p>No education available</p>
                                              )}

                                              <h4>Certificates</h4>
                                              {selectedEmployee.certificates &&
                                              selectedEmployee.certificates.length > 0 ? (
                                                selectedEmployee.certificates.map((cert, index) => (
                                                  <div key={index} className="certificate-section">
                                                    <p>
                                                      <strong>Certificate Name:</strong> {cert.certificateName}
                                                    </p>
                                                    <p>
                                                      <strong>Completion Date:</strong> {cert.completionDate}
                                                    </p>
                                                  </div>
                                                ))
                                              ) : (
                                                <p>No certificates available</p>
                                              )}

                                              {/* Tabbed System Information and Attachments Section */}
                                              <div className="tabbed-section">
                                                <div className="tabs">
                                                  <div
                                                    className={`tab ${
                                                      activeTab === "systemInformation" ? "active" : ""
                                                    }`}
                                                    onClick={() => setActiveTab("systemInformation")}
                                                  >
                                                    System Information
                                                  </div>
                                                  <div
                                                    className={`tab ${activeTab === "attachments" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("attachments")}
                                                  >
                                                    Attachments
                                                  </div>
                                                </div>
                                                <div className="tab-content">
                                                  {activeTab === "systemInformation" && (
                                                    <div className="system-information">
                                                      <p>
                                                        <strong>Created By:</strong>{" "}
                                                        {selectedEmployee.createdBy || "N/A"}
                                                      </p>
                                                      <p>
                                                        <strong>Created Timestamp:</strong>{" "}
                                                        {selectedEmployee.createdTimestamp || "N/A"}
                                                      </p>
                                                      <p>
                                                        <strong>Updated By:</strong>{" "}
                                                        {selectedEmployee.updatedBy || "N/A"}
                                                      </p>
                                                      <p>
                                                        <strong>Updated Timestamp:</strong>{" "}
                                                        {selectedEmployee.updatedTimestamp || "N/A"}
                                                      </p>
                                                    </div>
                                                  )}
                                                  {activeTab === "attachments" && (
                                                    <div className="attachments">
                                                      <p>No attachments available</p>
                                                    </div>
                                                  )}
                                                </div>
                                              </div>

                                              <button onClick={() => setSelectedEmployee(null)}>
                                                Back to List
                                              </button>
                                            </div>
                                          ) : (
                                            <table className="employee-table">
                                              <thead>
                                                <tr>
                                                  <th>Name</th>
                                                  <th>Email</th>
                                                  <th>Phone</th>
                                                  <th>Interested Job Location</th>
                                                  <th>Skills</th>
                                                  <th>Job Status</th>
                                                  <th>Employment Type</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {filteredEmployees.map((employee) => (
                                                  <tr
                                                    key={employee.id}
                                                    onClick={() => handleEmployeeClick(employee)}
                                                    className="clickable-row"
                                                  >
                                                    <td>
                                                      {employee.firstName} {employee.lastName}
                                                    </td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.phone}</td>
                                                    <td>{employee.interestedJobLocation}</td>
                                                    <td>
                                                      {employee.skills ? employee.skills.join(", ") : "No skills"}
                                                    </td>
                                                    <td>{employee.jobStatus}</td>
                                                    <td>{employee.employmentType}</td>
                                                  </tr>
                                                ))}
                                              </tbody>
                                            </table>
                                          )}
                                        </div>
                                      );
                                    };

                                    export default EmployeeProfile;
