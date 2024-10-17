import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests

const CandidateList = ({ jobRequirements, onCandidatesSelect }) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('/api/candidates', { params: { ...jobRequirements, ...filters, search } });
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [jobRequirements, filters, search, sortBy]);

  const handleFilterChange = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCandidateSelect = (candidateId) => {
    setSelectedCandidates((prevSelected) =>
      prevSelected.includes(candidateId)
        ? prevSelected.filter(id => id !== candidateId)
        : [...prevSelected, candidateId]
    );
  };

  useEffect(() => {
    onCandidatesSelect(selectedCandidates);
  }, [selectedCandidates, onCandidatesSelect]);

  return (
    <div className="candidate-list">
      <div className="filters">
        <input type="text" placeholder="Search by name or keywords" value={search} onChange={handleSearchChange} />
        {/* Example filter by skill */}
        <input type="text" placeholder="Filter by skill" onChange={e => handleFilterChange({ skill: e.target.value })} />
        <select onChange={handleSortChange} value={sortBy}>
          <option value="relevance">Relevance</option>
          <option value="experience">Experience</option>
          <option value="name">Name</option>
        </select>
      </div>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            <input
              type="checkbox"
              checked={selectedCandidates.includes(candidate.id)}
              onChange={() => handleCandidateSelect(candidate.id)}
            />
            <div>
              <h3>{candidate.name}</h3>
              <p>Skills: {candidate.skills.join(', ')}</p>
              <p>Experience: {candidate.yearsOfExperience} years</p>
              <p>Location: {candidate.location}</p>
              <p>Status: {candidate.currentStatus}</p>
              <p>Available: {candidate.availabilityDate}</p>
              <button onClick={() => window.open(candidate.resumeLink, '_blank')}>View/Download Resume</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;