import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GameState, Winner } from "./types";
import type { AppDispatch, RootState } from "../../store/store";
import { balanceSelector, UserActions } from "../user";
import { GameActions } from ".";
import { ComputerActions } from "../computer";
import { winsAgainst } from "../../utils/game.utils";
import { userActions } from "../user/slice";

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

  setTimeout(() => {
    dispatch(GameActions.setGame({ status: "finished" }));
    dispatch(calculateWinnerThunk());
  }, 3000);
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
    const { single, double } = state.game.winningMultiplier;

    if (!computerOption || userOptions.length === 0) return;

    const isDouble = userOptions.length === 2;
    const multiplier = isDouble ? double : single;

    let totalWinningAmount = 0;
    let hasWin = false;
    let hasTie = false;

    for (const option of userOptions) {
      if (option.type === computerOption) {
        // Tie — refund
        totalWinningAmount += option.bet;
        hasTie = true;
      } else if (winsAgainst[option.type] === computerOption) {
        // Win — apply multiplier
        totalWinningAmount += option.bet * multiplier;
        hasWin = true;

        dispatch(userActions.addWin());
      }
      // else: loss — nothing added
    }

    const updatedBalance = userBalance + totalWinningAmount;

    let winner: Winner = "computer";
    if (hasWin) winner = "player";
    else if (hasTie) winner = "tie";

    dispatch(UserActions.updateBalance({ balance: updatedBalance }));
    dispatch(UserActions.updateWinningAmount({ amount: totalWinningAmount }));
    dispatch(GameActions.setGame({ winner }));
  };

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
