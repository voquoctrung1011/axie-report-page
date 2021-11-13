import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "computer",
  initialState: {
    services: [],
    machines: [],
    allMachines: [],
    machineConfiguration: [],
    configDetail: {},
    mandatoryFields: [],
    modules: [],
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export default reducerSlice.reducer;

//action
export const { setServices } = reducerSlice.actions;

export const fetchAllServices = async (dispatch) => {};
