// src/components/AllProjects.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming axios is used for fetching data
import './AllProjects.css'; // Import the CSS file

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ status: '', owner: '' });
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10; // Example pagination setup

  useEffect(() => {
    // Fetch projects from your API
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects', {
          params: { search, ...filters, sortBy, page: currentPage },
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [search, filters, sortBy, currentPage]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      // Call API to delete project
      axios.delete(`/api/projects/${projectId}`)
        .then(() => {
          // Refresh project list after deletion
          setProjects(projects.filter(project => project.id !== projectId));
        }).catch(error => {
          console.error('Error deleting project:', error);
        });
    }
  };

  const handleExport = () => {
    // Implement export functionality (e.g., converting data to CSV)
    console.log('Exporting project data...');
  };

  return (
    <div className="all-projects">
      <h1>All Projects</h1>
      <div className="controls">
        <input type="text" placeholder="Search projects..." value={search} onChange={handleSearchChange} />
        <select onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="date">Date</option>
          <option value="status">Status</option>
        </select>
        {/* Add more filters as needed */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Last Activity</th>
            <th>Candidates</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.jobTitle}</td>
              <td>{project.status}</td>
              <td>{project.lastActivityDate}</td>
              <td>{project.numberOfCandidates}</td>
              <td>{project.owner}</td>
              <td>
                <button onClick={() => console.log('Viewing', project.id)}>View/Edit</button>
                <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                <button onClick={handleExport}>Export</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {/* Example pagination controls */}
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={projects.length < projectsPerPage}>Next</button>
      </div>
    </div>
  );
};

export default AllProjects;