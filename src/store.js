
// store.js
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";
import vendorReducer from "./features/vendorSlice";
import jobReducer from "./features/jobSlice";
import { mockEmployees, mockVendors, mockJobs } from "./mockData";

const preloadedState = {
  employee: {
    profiles: mockEmployees
  },
  vendor: {
    vendors: mockVendors
  },
  job: {
    jobs: mockJobs
  }
};

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    vendor: vendorReducer,
    job: jobReducer,
  },
  preloadedState
});

export default store;
