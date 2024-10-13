import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [
      {
        id: "1",
        title: "Frontend Developer",
        companyName: "Tech Corp",
        location: "New York, NY",
        jobType: "Full-Time",
        description: "We are looking for a skilled Frontend Developer to join our team.",
        salaryRange: "$70,000 - $90,000",
        skills: ["React", "JavaScript", "CSS"],
        postedDate: "2024-10-01",
        applyByDate: "2024-10-31",
      },
      {
        id: "2",
        title: "Backend Developer",
        companyName: "Innovate Solutions",
        location: "San Francisco, CA",
        jobType: "Contract",
        description: "Seeking an experienced Backend Developer with expertise in Node.js.",
        salaryRange: "$80,000 - $100,000",
        skills: ["Node.js", "Express", "MongoDB"],
        postedDate: "2024-10-05",
        applyByDate: "2024-11-05",
      },
    ],
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex(
        (job) => job.id === action.payload.id
      );
      if (index >= 0) {
        state.jobs[index] = action.payload;
      }
    },
  },
});

export const { addJob, updateJob } = jobSlice.actions;
export default jobSlice.reducer;