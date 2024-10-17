// src/components/CommunicationManagement.js

import React, { useState } from 'react';

const CommunicationManagement = ({ selectedCandidates }) => {
  // Hardcoded email credentials for testing purposes
  const emailCredentials = {
    email: 'admin@teknora.co',
    password: 'Teknora@2024'
  };

  const [emailContent, setEmailContent] = useState('');
  const [communicationLogs, setCommunicationLogs] = useState([]);

  const sendEmail = async (recipients, content) => {
    // Utilize the hardcoded email credentials
    const email = emailCredentials.email;
    const password = emailCredentials.password;

    if (recipients.length === 0) {
      alert("No candidates selected.");
      return;
    }

    try {
      // Simulating an email sending process
      console.log('Sending email from:', email);
      console.log('Password:', password);
      console.log('Recipients:', recipients);
      console.log('Content:', content);

      // Log the communication
      const newLog = {
        date: new Date().toISOString(),
        type: 'Email',
        contentSummary: content.slice(0, 100),
        user: 'Current User', // This could be dynamically fetched from your auth system
      };
      setCommunicationLogs([...communicationLogs, newLog]);

      alert('Email sent successfully!');
    } catch (error) {
      console.error("Failed to send email:", error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className="communication-management">
      <h2>Communications Management</h2>
      
      <div>
        <h3>Selected Candidates</h3>
        <ul>
          {selectedCandidates.map(candidate => (
            <li key={candidate.id}>
              {candidate.name} ({candidate.email})
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Email Composer</h3>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Compose your email here..."
        />
        <button onClick={() => sendEmail(selectedCandidates.map(c => c.email), emailContent)}>
          Send Email
        </button>
      </div>

      <div>
        <h3>Communication Logs</h3>
        <ul>
          {communicationLogs.map((log, index) => (
            <li key={index}>
              {log.date} - {log.type}: {log.contentSummary} by {log.user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunicationManagement;