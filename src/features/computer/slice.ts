import { createSlice } from "@reduxjs/toolkit";
import type { Computer } from "./types";
import { positionOptions } from "../../components/Positions/Position/Position-option";

interface ComputerState {
  computer: Computer;
}

const initialState: ComputerState = {
  computer: {
    option: null,
  },
};

const computerSlice = createSlice({
  name: "computer",
  initialState,
  reducers: {
    selectRandomOption: (state) => {
      const idx = Math.floor(Math.random() * positionOptions.length);
      const randomOption = positionOptions[idx];

      return {
        ...state,
        computer: {
          ...state.computer,
          option: randomOption,
        },
      };
    },
  },
});

export const computerReducer = computerSlice.reducer;
export const computerActions = computerSlice.actions;
