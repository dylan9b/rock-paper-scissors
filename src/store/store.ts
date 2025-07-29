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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
