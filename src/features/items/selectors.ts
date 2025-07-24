import type { RootState } from "../../store/store";

export const selectItems = (state: RootState) => state.items.items;
