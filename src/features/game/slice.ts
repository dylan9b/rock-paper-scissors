import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GameState } from "./types";
import type { AppDispatch, RootState } from "../../store/store";
import { balanceSelector, UserActions } from "../user";
import { GameActions } from ".";
import { ComputerActions } from "../computer";
import { userActions } from "../user/slice";
import { evaluateGame } from "../../utils/evaluateGameResult";

const initialState: GameState = {
  betIncrement: 500,
  winner: null,
  status: "idle",
  winningMultiplier: {
    single: 14,
    double: 3,
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
};

export const endGameThunk = () => (dispatch: AppDispatch) => {
  dispatch(GameActions.setGame({ status: "idle", winner: null }));
  dispatch(ComputerActions.resetOption());
  dispatch(UserActions.resetOptions());
  dispatch(UserActions.updateWinningAmount({ amount: 0 }));
};

export const calculateWinnerThunk =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const userOptions = state.user.selectedOptions;
    const computerOption = state.computer.option;
    const userBalance = balanceSelector(state);
    const multipliers = state.game.winningMultiplier;

    if (!computerOption || userOptions.length === 0) return;

    const { winner, totalWinningAmount, isWin } = evaluateGame({
      userOptions,
      computerOption,
      multipliers,
    });

    if (isWin) {
      dispatch(userActions.addWin());
    }

    dispatch(
      UserActions.updateBalance({
        balance: userBalance + totalWinningAmount,
      })
    );

    dispatch(UserActions.updateWinningAmount({ amount: totalWinningAmount }));
    dispatch(GameActions.setGame({ winner }));
  };

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
