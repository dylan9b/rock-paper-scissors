import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import type { PositionOption } from "../../components/Positions/Position/Position-option";

const selectUserState = (state: RootState) => state.user;

export const selectedOptionsSelector = createSelector(
  selectUserState,
  (userState) => userState.selectedOptions
);

export const selectedOptionSelector = (type: PositionOption) =>
  createSelector(selectUserState, (userState) =>
    userState.selectedOptions.find((option) => option.type === type)
  );

export const balanceSelector = createSelector(
  selectUserState,
  (userState) => userState.balance
);

export const currentBetSelector = createSelector(selectUserState, (userState) =>
  userState.selectedOptions.reduce((acc, option) => acc + (option.bet || 0), 0)
);

export const winsSelector = createSelector(
  selectUserState,
  (userState) => userState.wins
);

export const winningAmountSelector = createSelector(
  selectUserState,
  (userState) => userState.winningAmount
);
