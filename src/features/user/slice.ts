import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserOption, UserState } from "./types";

const initialState: UserState = {
  selectedOptions: [],
  balance: 5000,
  wins: 0,
  winningAmount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addWin: (state) => {
      return {
        ...state,
        wins: state.wins + 1,
      };
    },
    addOption: (state, action: PayloadAction<UserOption>) => {
      return {
        ...state,
        selectedOptions: [...state.selectedOptions, action.payload],
        balance: state.balance - action.payload.bet,
      };
    },

    removeOption: (state, action: PayloadAction<UserOption>) => {
      return {
        ...state,
        selectedOptions: state.selectedOptions.filter(
          (option) => option.type !== action.payload.type
        ),
        balance: state.balance + action.payload.bet,
      };
    },

    updateOption: (state, action: PayloadAction<UserOption>) => {
      const { type, bet: newBet } = action.payload;

      const selectedOption = state.selectedOptions.find(
        (option) => option.type === type
      );

      if (!selectedOption) return state;

      const oldBet = selectedOption.bet;
      const betDifference = newBet - oldBet;

      return {
        ...state,
        selectedOptions: state.selectedOptions.map((option) =>
          option.type === type ? { ...option, bet: newBet } : option
        ),
        balance: state.balance - betDifference,
      };
    },

    resetOptions: (state) => {
      return {
        ...state,
        selectedOptions: [],
      };
    },

    updateBalance: (
      state,
      action: PayloadAction<{ balance: UserState["balance"] }>
    ) => {
      return {
        ...state,
        balance: action.payload.balance,
      };
    },

    updateWinningAmount: (
      state,
      action: PayloadAction<{ amount: UserState["winningAmount"] }>
    ) => {
      return {
        ...state,
        winningAmount: action.payload.amount,
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
