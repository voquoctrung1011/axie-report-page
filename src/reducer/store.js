import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "report",
  initialState: {
    listCheckbox: [
      { id: 1, value: "Beast" },
      { id: 2, value: "Bug" },
      { id: 3, value: "Bird" },
      { id: 4, value: "Plant" },
      { id: 5, value: "Aquatic" },
      { id: 6, value: "Reptile" },
      { id: 7, value: "Dusk" },
      { id: 8, value: "Dawn" },
      { id: 9, value: "Metch" },
    ],
    showAll: [],
  },
  reducers: {
    setListCheckbox: (state, action) => {
      state.listCheckbox = action.payload;
    },
    setShowAll: (state, action) => {
      state.showAll = action.payload;
    },
  },
});

export default reducerSlice.reducer;

//action
export const { setListCheckbox, setShowAll } = reducerSlice.actions;
