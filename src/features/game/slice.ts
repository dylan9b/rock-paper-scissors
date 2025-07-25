import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GameState, Winner } from "./types";
import type { AppDispatch, RootState } from "../../store/store";
import { winningMultiplierSelector, winningOptionSelector } from "./selectors";
import { balanceSelector, currentBetSelector, UserActions } from "../user";
import { GameActions } from ".";
import { ComputerActions } from "../computer";

const initialState: GameState = {
  betIncrement: 500,
  winner: null,
  status: "idle",
  winningMultiplier: {
    multiple: 3,
    single: 14,
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame(state, action: PayloadAction<Partial<GameState>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const beginGameThunk = () => (dispatch: AppDispatch) => {
  dispatch(GameActions.setGame({ status: "playing" }));
  dispatch(ComputerActions.selectRandomOption());

  dispatch(calculateWinnerThunk());
  setTimeout(() => {
    dispatch(GameActions.setGame({ status: "finished" }));
  }, 3000);
};

export const endGameThunk = () => (dispatch: AppDispatch) => {
  const updatedGame: Partial<GameState> = {
    status: "idle",
    winner: null,
  };
  dispatch(GameActions.setGame(updatedGame));
  dispatch(ComputerActions.resetOption());
  dispatch(UserActions.resetOptions());
};

export const calculateWinnerThunk =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const userOptions = state.user.selectedOptions.map((option) => option.type);
    const computerOption = state.computer.option;
    const winningOption = winningOptionSelector(state);
    const winningMultiplier = winningMultiplierSelector(state);
    const userBet = currentBetSelector(state);
    const userBalance = balanceSelector(state);

    const updatedBalance = winningOption
      ? userBalance + winningMultiplier * userBet
      : userBalance - userBet;

    let winner: Winner | null = null;
    if (
      computerOption &&
      userOptions.length === 1 &&
      userOptions[0] === computerOption
    ) {
      winner = "tie";
    } else if (computerOption && userOptions.includes(computerOption)) {
      winner = "player";

      const updatedBalance = winningOption
        ? userBalance + winningMultiplier * userBet
        : userBalance - userBet;

      dispatch(UserActions.updateBalance({ balance: updatedBalance }));
    } else {
      winner = "computer";
      dispatch(UserActions.updateBalance({ balance: updatedBalance }));
    }

    dispatch(GameActions.setGame({ winner }));
  };
export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
