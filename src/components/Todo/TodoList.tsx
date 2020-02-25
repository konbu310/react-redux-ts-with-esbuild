import React, { FC } from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "./todoSlice";
import styled from "styled-components";
import { TodoInput } from "./TodoInput";

// ______________________________________________________
//
// @ Types
//
type Props = {};

type TaskProps = {
  isDone: boolean;
};

// ______________________________________________________
//
// @ Styled-Components
//
const Task = styled.li<TaskProps>`
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
`;

// ______________________________________________________
//
// @ Views
//
export const TodoList: FC<Props> = props => {
  const tasks = useSelector(todoSelector);

  return (
    <>
      <h1>Todo</h1>
      <TodoInput />
      <ul>
        {tasks.map(task => (
          <Task key={task.id} isDone={task.isDone}>
            {task.title}
          </Task>
        ))}
      </ul>
    </>
  );
};
