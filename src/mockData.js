export const mockEmployees = [
    {
      id: "emp1",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-15",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      linkedInURL: "https://linkedin.com/in/johndoe",
      hobbies: "Hiking, Reading",
      address: "123 Main St, New York, NY",
      interestedJobLocation: "New York, NY",
      bio: "John Doe is a software developer with over 10 years of experience in web development. Passionate about hiking and outdoor activities.",
      skills: ["JavaScript", "React", "Node.js"],
      experience: [
        {
          companyName: "Tech Corp",
          role: "Senior Developer",
          startDate: "2015-03-01",
          endDate: "2020-08-31",
          jobDuties: "Developed web applications using React and Node.js.",
          location: "New York, NY"
        }
      ],
      education: [
        {
          courseName: "Computer Science",
          degreeName: "Bachelors",
          major: "Software Engineering",
          score: "3.8 GPA",
          startDate: "2008-09-01",
          endDate: "2012-06-30",
          location: "University of New York"
        }
      ],
      certificates: [
        {
          certificateName: "Certified JavaScript Developer",
          completionDate: "2021-05-15"
        }
      ]
    },
    {
      id: "emp2",
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: "1985-04-25",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      linkedInURL: "https://linkedin.com/in/janesmith",
      hobbies: "Cooking, Traveling",
      address: "456 Oak St, Los Angeles, CA",
      interestedJobLocation: "Los Angeles, CA",
      bio: "Jane Smith is a project manager with extensive experience in managing software development projects. Loves cooking and traveling.",
      skills: ["Project Management", "Agile", "Scrum"],
      experience: [
        {
          companyName: "Creative Solutions",
          role: "Project Manager",
          startDate: "2013-01-01",
          endDate: "2022-01-01",
          jobDuties: "Managed software development projects and coordinated between teams.",
          location: "Los Angeles, CA"
        }
      ],
      education: [
        {
          courseName: "Business Administration",
          degreeName: "Masters",
          major: "Project Management",
          score: "4.0 GPA",
          startDate: "2010-09-01",
          endDate: "2012-06-30",
          location: "University of California"
        }
      ],
      certificates: [
        {
          certificateName: "PMP Certification",
          completionDate: "2019-11-20"
        }
      ]
    }
  ];
  
  export const mockVendors = [
    {
      id: "vendor1",
      name: "Tech Solutions",
      contactEmails: "contact@techsolutions.com",
      industry: "Software Development",
      requiredSkills: "JavaScript, React, Node.js",
      websiteURL: "https://www.techsolutions.com",
      contractStartDate: "2023-01-01",
      contractEndDate: "2024-12-31",
      commissionPercentage: 10,
      relationshipManager: "Alice Johnson"
    },
    {
      id: "vendor2",
      name: "Creative Minds",
      contactEmails: "info@creativeminds.com",
      industry: "Design and Marketing",
      requiredSkills: "Graphic Design, Marketing",
      websiteURL: "https://www.creativeminds.com",
      contractStartDate: "2022-06-01",
      contractEndDate: "2023-06-01",
      commissionPercentage: 15,
      relationshipManager: "Bob Anderson"
    }
  ];
  
  export const mockJobs = [
    {
      id: "job1",
      title: "Frontend Developer",
      companyName: "Tech Solutions",
      location: "New York, NY",
      jobType: "Full-time",
      description: "We are looking for a skilled frontend developer proficient in React and JavaScript.",
      salaryRange: "$80,000 - $100,000",
      skills: ["JavaScript", "React"],
      postedDate: "2023-03-15",
      applyByDate: "2023-04-30"
    },
    {
      id: "job2",
      title: "Project Manager",
      companyName: "Creative Minds",
      location: "Los Angeles, CA",
      jobType: "Part-time",
      description: "Looking for an experienced project manager with strong leadership skills.",
      salaryRange: "$60,000 - $80,000",
      skills: ["Project Management", "Leadership"],
      postedDate: "2023-02-01",
      applyByDate: "2023-03-01"
    }
  ];