import { createSelector } from "@reduxjs/toolkit";
import { selectedComputerOptionSelector } from "../computer";
import { selectedOptionsSelector } from "../user";
import type { RootState } from "../../store/store";
import { winsAgainst } from "../../utils/game.utils";

export const winningOptionSelector = createSelector(
  [selectedOptionsSelector, selectedComputerOptionSelector],
  (userOptions, computerOption) => {
    if (!computerOption) {
      return null;
    }

    const winningUserOption = userOptions.find(
      (option) => winsAgainst[option.type] === computerOption,
    );

    return winningUserOption?.type ?? null;
  },
);

export const tieOptionSelector = createSelector(
  [selectedOptionsSelector, selectedComputerOptionSelector],
  (userOptions, computerOption) => {
    if (!computerOption) {
      return null;
    }

    const tieUserOption = userOptions.find(
      (option) => option.type === computerOption,
    );

    return tieUserOption?.type ?? null;
  },
);

export const userBattleChoiceDisplaySelector = createSelector(
  [
    selectedOptionsSelector,
    selectedComputerOptionSelector,
    winningOptionSelector,
    tieOptionSelector,
  ],
  (userOptions, computerOption, winningOption, tieOption) => {
    if (!computerOption) {
      return null;
    }

    if (userOptions.length === 1) {
      return userOptions[0].type;
    }

    return winningOption ?? tieOption;
  },
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
  },
);

export const gameMetaSelector = createSelector(gameState, (state) => ({
  status: state.status,
  winner: state.winner,
  betIncrement: state.betIncrement,
}));
