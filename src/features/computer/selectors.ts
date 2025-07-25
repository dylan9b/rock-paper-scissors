import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const selectComputerState = (state: RootState) => state.computer;

export const selectedComputerOptionSelector = createSelector(
  selectComputerState,
  (state) => state.option
);
