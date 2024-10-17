// src/components/CreateProject.js
import React, { useState, useEffect } from "react";
import './CreateProject.css';
import JobDetails from './JobDetails';
import CandidateList from './CandidateList';
import CommunicationManagement from './CommunicationManagement'; // Add the import

const CreateProject = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [projectData, setProjectData] = useState({
    jobDetails: {},
    candidateInfo: [],
    communicationPrefs: {},
  });

  const phaseTitles = [
    "Add a Job to Your Project",
    "Identify Candidates",
    "Communications Management",
  ];

  const handleNext = () => {
    if (currentPhase < phaseTitles.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const handleBack = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem('projectDraft', JSON.stringify(projectData));
    alert('Draft saved!');
  };

  const handleJobDetailsSubmit = (jobDetailsData) => {
    setProjectData({ ...projectData, jobDetails: jobDetailsData });
    alert('Job details added!');
  };

  const handleCandidateSelection = (candidateIds) => {
    // Assume you have candidate data stored in some form
    const selectedCandidates = candidateIds.map(id => ({
      id,
      email: 'candidate@example.com', // Fetch candidate email from your candidate data source
      name: 'Candidate Name', // Fetch candidate name
    }));
    setProjectData({ ...projectData, candidateInfo: candidateIds });
  };

  useEffect(() => {
    const savedDraft = localStorage.getItem('projectDraft');
    if (savedDraft) {
      setProjectData(JSON.parse(savedDraft));
    }
  }, []);

  return (
    <div className="project-creation">
      <div className="progress-bar">
        {phaseTitles.map((title, index) => (
          <div key={index} className={`progress-step ${index === currentPhase ? 'active' : ''}`}>
            {title}
          </div>
        ))}
      </div>
      
      <div className="phase-content">
        {currentPhase === 0 && (
          <div>
            <h2>Phase 1: Add a Job to Your Project</h2>
            <JobDetails onSubmit={handleJobDetailsSubmit} />
          </div>
        )}
        {currentPhase === 1 && (
          <div>
            <h2>Phase 2: Identify Candidates</h2>
            <CandidateList jobRequirements={projectData.jobDetails} onCandidatesSelect={handleCandidateSelection} />
          </div>
        )}
        {currentPhase === 2 && (
          <div>
            <h2>Phase 3: Communications Management</h2>
            <CommunicationManagement selectedCandidates={projectData.candidateInfo} />
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button disabled={currentPhase === 0} onClick={handleBack}>Back</button>
        <button onClick={handleNext} disabled={currentPhase === phaseTitles.length - 1}>Next</button>
        <button onClick={handleSaveDraft}>Save Draft</button>
      </div>
    </div>
  );
};

export default CreateProject;