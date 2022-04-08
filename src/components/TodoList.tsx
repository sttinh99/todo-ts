import React from "react";
import { DeleteItem, Todo, ToggleTodo } from "../types";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteItem: DeleteItem;
}

export const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteItem,
}) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};
