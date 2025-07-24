import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";
import type { PositionOption } from "../../components/Positions/Position/Position-option";

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    hasWon: false,
    selectedOptions: [],
    balance: 5000,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<PositionOption>) => {
      return {
        ...state,
        user: {
          ...state.user,
          selectedOptions: [...state.user.selectedOptions, action.payload],
        },
      };
    },

    removeOption: (state, action: PayloadAction<PositionOption>) => {
      return {
        ...state,
        user: {
          ...state.user,
          selectedOptions: state.user.selectedOptions.filter(
            (option) => option !== action.payload
          ),
        },
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
