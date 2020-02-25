import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./components/Todo/todoSlice";

const reducer = combineReducers({
  todo: todoReducer
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({ reducer });
