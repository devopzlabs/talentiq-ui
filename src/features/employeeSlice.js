import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    profiles: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.profiles.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const index = state.profiles.findIndex(
        (employee) => employee.id === action.payload.id
      );
      if (index >= 0) {
        state.profiles[index] = action.payload;
      }
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;