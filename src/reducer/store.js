/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

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
    pageResult: data,
    listChoose: [],
    pageNumber: {
      all: { start: 0, end: 5 },
      allR1: { start: 0, end: 5 },
      allR2: { start: 0, end: 5 },
    },
    searchResult: {},
    showAll: [],
  },
  reducers: {
    setListCheckbox: (state, action) => {
      state.listCheckbox = action.payload;
    },
    setShowAll: (state, action) => {
      state.showAll = action.payload;
    },
    setPageResult: (state, action) => {
      state.pageResult = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setListChoose: (state, action) => {
      state.listChoose = action.payload;
    },
  },
});

export default reducerSlice.reducer;

//action
export const {
  setListCheckbox,
  setShowAll,
  setSearchResult,
  setPageNumber,
  setPageResult,
  setListChoose,
} = reducerSlice.actions;
