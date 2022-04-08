import React, { useState } from "react";
import { AddTodo } from "../types";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState("");
  //const inputRref = useRef();
  const onSubmit = (e: any) => {
    e.preventDefault();
    addTodo(inputTodo);
    setInputTodo("");
  };
  return (
    <form className="add-item" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="enter todo...."
        //ref={inputRref}
      />
      <button type="submit">Add</button>
    </form>
  );
};
