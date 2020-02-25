import React, { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "./todoSlice";
import styled from "styled-components";

// ______________________________________________________
//
// @ Types
//
type Props = {};

type InputProps = {};

// ______________________________________________________
//
// @ Styled-Components
//
const Input = styled.input<InputProps>``;

// ______________________________________________________
//
// @ Views
//
export const TodoInput: FC<Props> = props => {
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("keydown", ev => {
      if (ev.key === "Enter") addTodo();
    });
  }, []);

  const addTodo = () => {
    if (inputRef.current && inputRef.current.value) {
      dispatch(todoActions.addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <Input ref={inputRef} type="text" />
      <button onClick={addTodo}>add</button>
    </>
  );
};
