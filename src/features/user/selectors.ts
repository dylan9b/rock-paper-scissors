import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import type { Variant } from "../../components/Position/Position-styles";

const selectUserState = (state: RootState) => state.user;

export const selectedOptions = createSelector(
  selectUserState,
  (userState) => userState.user?.selectedOptions
);

export const isOptionSelected = (variant: Variant) =>
  createSelector(
    selectUserState,
    (userState) =>
      !!userState.user?.selectedOptions.find((option) => option === variant)
  );
