import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Dashboard.css';
import Chatbot from './Chatbot'; // Ensure the path is correct based on your project structure

const Dashboard = () => {
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.job.jobs);
  const employees = useSelector((state) => state.employee.profiles);
  const vendors = useSelector((state) => state.vendor.vendors);

  const jobCount = jobs ? jobs.length : 0;
  const employeeCount = employees ? employees.length : 0;
  const vendorCount = vendors ? vendors.length : 0;

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://data.alpaca.markets/v1beta1/news",
          {
            headers: {
              "APCA-API-KEY-ID": process.env.ALPACA_API_KEY || "PK7WK8URRYC1DTKMI8RF",
              "APCA-API-SECRET-KEY": process.env.ALPACA_SECRET_KEY || "q9T5rD2XFnFS5QJx6BbFDNLiPuA0GJ4CFWewuTjl",
            },
            params: {
              symbols: "hiring,recruitment",
              limit: 5,
            },
          }
        );
        setNews(response.data.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  const handleAddVendor = () => {
    navigate('/add-vendor');
  };

  const handlePostJob = () => {
    navigate('/add-job');
  };

  return (
    <div className="dashboard">
      <h2>Welcome to TalentIQ Dashboard</h2>
      <p>Your go-to platform for managing employees, vendors, and job postings.</p>
      <div className="dashboard-buttons">
        <button onClick={handleAddEmployee}>Add Employee</button>
        <button onClick={handleAddVendor}>Create Vendor</button>
        <button onClick={handlePostJob}>Post Job</button>
      </div>

      {/* Job Count Widget */}
      <div className="job-count-widget">
        <h3>Job Board Overview</h3>
        <p>Total Jobs Available: {jobCount}</p>
      </div>

      {/* Employee Count Widget */}
      <div className="employee-count-widget">
        <h3>Employee Overview</h3>
        <p>Total Employee Profiles: {employeeCount}</p>
      </div>

      {/* Vendor Count Widget */}
      <div className="vendor-count-widget">
        <h3>Vendor Overview</h3>
        <p>Total Vendors: {vendorCount}</p>
      </div>

      {/* News Widget */}
      <div className="news-widget">
        <h3>Top Hiring & Recruitment News</h3>
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.headline}
              </a>
              <p>{article.source}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default Dashboard;