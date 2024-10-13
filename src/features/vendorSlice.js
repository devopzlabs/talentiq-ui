import { createSlice } from "@reduxjs/toolkit";

export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendors: [],
  },
  reducers: {
    addVendor: (state, action) => {
      state.vendors.push(action.payload);
    },
    updateVendor: (state, action) => {
      const index = state.vendors.findIndex(
        (vendor) => vendor.id === action.payload.id
      );
      if (index >= 0) {
        state.vendors[index] = action.payload;
      }
    },
  },
});

export const { addVendor, updateVendor } = vendorSlice.actions;
export default vendorSlice.reducer;
