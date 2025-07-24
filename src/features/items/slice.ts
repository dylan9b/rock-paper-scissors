import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./types";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items", // group name for the actions
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    update: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

// TODO: Can we group these together in a single export?
export const itemReducer = itemsSlice.reducer;
export const itemActions = itemsSlice.actions;
