/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import { Host_Dev } from "../constants/host";
import axios from "axios";

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
    createFilter: {
      filterName: "",
      data: {
        hp_threshold: 21,
        speed_threshold: 21,
        skill_threshold: 21,
        morale_threshold: 21,
        pureness_threshold: 0,
        attack_threshold: 0,
        defense_threshold: 0,
        quality_threshold: 0,
        axie_class: [],
        min_price: 0,
        max_price: 50000000000000000,
        breedCount_threshold: 7,
        parts: [],
      },
    },
    dataFilter: [],
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
    setCreateFilter: (state, action) => {
      state.createFilter = action.payload;
    },
    setDataFilter: (state, action) => {
      state.dataFilter = action.payload;
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
  setCreateFilter,
} = reducerSlice.actions;

export const CreateFilter = (filter) => async (dispatch) => {
  try {
    axios
      .post(`${Host_Dev}create-filter`, filter)
      .then((res) => console.log(res));
  } catch (err) {
    return console.error(err);
  }
};

export const FetchDataFilter = () => async (dispatch) => {
  try {
    axios.get(`${Host_Dev}filters`).then((res) => {
      console.log(res);
      dispatch(setDataFilter(res));
    });
  } catch (err) {
    return console.error(err);
  }
};
