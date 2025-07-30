import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@features/user";
import { computerReducer } from "@features/computer";
import { gameReducer } from "@features/game/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    computer: computerReducer,
    game: gameReducer,
  },
});

// https://redux.js.org/usage/usage-with-typescript
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
