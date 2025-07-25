import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import type { PositionOption } from "../../components/Positions/Position/Position-option";

const selectUserState = (state: RootState) => state.user;

export const selectedOptionsSelector = createSelector(
  selectUserState,
  (userState) => userState.user?.selectedOptions
);

export const selectedOptionSelector = (type: PositionOption) =>
  createSelector(selectUserState, (userState) =>
    userState.user?.selectedOptions.find((option) => option.type === type)
  );

export const balanceSelector = createSelector(
  selectUserState,
  (userState) => userState.user.balance
);

export const currentBetSelector = createSelector(selectUserState, (userState) =>
  userState.user.selectedOptions.reduce(
    (acc, option) => acc + (option.bet || 0),
    0
  )
);
