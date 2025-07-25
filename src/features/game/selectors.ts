import { createSelector } from "@reduxjs/toolkit";
import { selectedComputerOptionSelector } from "../computer";
import { selectedOptionsSelector } from "../user";
import type { RootState } from "../../store/store";
import { winsAgainst } from "../../utils/game.utils";

export const winningOptionSelector = createSelector(
  [selectedOptionsSelector, selectedComputerOptionSelector],
  (userOptions, computerOption) => {
    if (!computerOption) return null;

    const winningUserOption = userOptions.find(
      (option) => winsAgainst[option.type] === computerOption
    );

    return winningUserOption?.type ?? null;
  }
);

const gameState = (state: RootState) => state.game;

export const winningMultiplierSelector = createSelector(
  [gameState, selectedOptionsSelector],
  (state, userOptions) => {
    const multiplier =
      userOptions.length > 1
        ? state.winningMultiplier.double
        : state.winningMultiplier.single;
    return multiplier;
  }
);

export const gameStatusSelector = createSelector(
  gameState,
  (state) => state.status
);

export const gameWinnerSelector = createSelector(
  gameState,
  (state) => state.winner
);
