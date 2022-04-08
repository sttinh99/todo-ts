import React from "react";
import { Todo, ToggleTodo, DeleteItem } from "../types";

interface Props {
  todo: Todo;
}
interface Props {
  toggleTodo: ToggleTodo;
  deleteItem: DeleteItem;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteItem }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.isComplete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          defaultChecked={todo.isComplete ?? true}
          onClick={() => toggleTodo(todo)}
        />{" "}
        {todo.text}
      </label>
      <span className="delete" onClick={() => deleteItem(todo)}>
        X
      </span>
    </li>
  );
};

export default TodoListItem;
