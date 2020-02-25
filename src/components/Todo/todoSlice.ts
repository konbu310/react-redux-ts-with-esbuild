import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../Store";

// ______________________________________________________
//
// @ Types
//
export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export type State = {
  tasks: Task[];
};

// ______________________________________________________
//
// @ Slice
//
const todoSlice = createSlice({
  name: "todo",
  initialState: { tasks: [] } as State,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload,
        isDone: false
      });
    }
  }
});

// ______________________________________________________
//
// @ Exports
//
export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todo.tasks;
