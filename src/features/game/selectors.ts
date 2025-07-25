import { createSelector } from "@reduxjs/toolkit";
import { selectedComputerOptionSelector } from "../computer";
import { selectedOptionsSelector } from "../user";
import type { RootState } from "../../store/store";

export const winningOptionSelector = createSelector(
  [selectedOptionsSelector, selectedComputerOptionSelector],
  (userOptions, computerOption) => {
    return (
      computerOption !== null &&
      userOptions.find((option) => option.type === computerOption)?.type
    );
  }
);

const gameState = (state: RootState) => state.game;

export const winningMultiplierSelector = createSelector(
  [gameState, selectedOptionsSelector],
  (state, userOptions) => {
    const multiplier =
      userOptions.length > 1
        ? state.winningMultiplier.multiple
        : state.winningMultiplier.single;
    return multiplier;
  }
);

export const gameStatusSelector = createSelector(gameState, (state) => state.status);
