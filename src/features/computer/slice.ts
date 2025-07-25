import { createSlice } from "@reduxjs/toolkit";
import { positionOptions } from "../../components/Positions/Position/Position-option";
import type { ComputerState } from "./types";

const initialState: ComputerState = {
  option: null,
};

const computerSlice = createSlice({
  name: "computer",
  initialState,
  reducers: {
    resetOption: (state) => {
      return {
        ...state,
        option: null,
      };
    },
    selectRandomOption: (state) => {
      const idx = Math.floor(Math.random() * positionOptions.length);
      const randomOption = positionOptions[idx];

      return {
        ...state,
        option: randomOption,
      };
    },
  },
});

export const computerReducer = computerSlice.reducer;
export const computerActions = computerSlice.actions;
