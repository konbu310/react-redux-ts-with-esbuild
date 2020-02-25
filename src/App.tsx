import React, { FC } from "react";
import { TodoList } from "./components/Todo/TodoList";

// ______________________________________________________
//
// @ Types
//
type Props = {};

// ______________________________________________________
//
// @ View
//
export const App: FC = () => {
  return (
    <>
      <TodoList />
    </>
  );
};
