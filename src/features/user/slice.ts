import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserOption } from "./types";

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    selectedOptions: [],
    balance: 5000,
    wins: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<UserOption>) => {
      return {
        ...state,
        user: {
          ...state.user,
          selectedOptions: [...state.user.selectedOptions, action.payload],
          balance: state.user.balance - action.payload.bet,
        },
      };
    },

    removeOption: (state, action: PayloadAction<UserOption>) => {
      return {
        ...state,
        user: {
          ...state.user,
          selectedOptions: state.user.selectedOptions.filter(
            (option) => option.type !== action.payload.type
          ),
          balance: state.user.balance + action.payload.bet,
        },
      };
    },

    updateOption: (state, action: PayloadAction<UserOption>) => {
      const { type, bet: newBet } = action.payload;
      const user = state.user;

      if (!user) return state;

      const selectedOption = user.selectedOptions.find(
        (option) => option.type === type
      );

      if (!selectedOption) return state;

      const oldBet = selectedOption.bet;
      const betDifference = newBet - oldBet;

      return {
        ...state,
        user: {
          ...user,
          selectedOptions: user.selectedOptions.map((option) =>
            option.type === type ? { ...option, bet: newBet } : option
          ),
          balance: user.balance - betDifference,
        },
      };
    },

    updateBalance: (state, action: PayloadAction<{ balance: number }>) => {
      return {
        ...state,
        user: {
          ...state.user,
          balance: action.payload.balance,
        },
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
