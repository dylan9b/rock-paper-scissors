import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Game, Winner } from "./types";
import type { AppDispatch, RootState } from "../../store/store";
import { winningMultiplierSelector, winningOptionSelector } from "./selectors";
import { balanceSelector, currentBetSelector, UserActions } from "../user";

interface GameState {
  game: Game;
}

const initialState: GameState = {
  game: {
    betIncrement: 500,
    totalBetValue: 0,
    winner: null,
    winningMultiplier: {
      multiple: 3,
      single: 14,
    },
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWinner(state, action: PayloadAction<Winner | null>) {
      state.game.winner = action.payload;
    },
  },
});

export const calculateWinnerThunk =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const userOptions = state.user.user.selectedOptions.map(
      (option) => option.type
    );
    const computerOption = state.computer.computer.option;
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

    dispatch(gameActions.setWinner(winner));
  };
export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
