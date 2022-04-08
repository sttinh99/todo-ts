import React, { useState } from "react";
import "./App.css";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import { AddTodo, DeleteItem, Todo } from "./types";
import { getData, setData } from "./components/localStorage";

// const initialTodos: Todo[] = [
//   {
//     id: Math.random(),
//     text: "Go to work",
//     isComplete: false,
//   },
//   {
//     id: Math.random(),
//     text: "Cooking",
//     isComplete: false,
//   },
// ];

function App() {
  const [todos, setTodos] = useState(getData);

  const toggleTodo = (selectTodo: Todo) => {
    // debugger;
    const newTodos = todos.map((todo: any) => {
      if (todo === selectTodo) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    setData(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    if (!text) {
      return alert("input is not valid");
    }
    const newTodo: Todo = {
      id: Math.random(),
      text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setData([...todos, newTodo]);
  };
  const deleteItem: DeleteItem = (todo: Todo) => {
    if (todo.isComplete === false) {
      return alert("this is uncomplete");
    }
    let text = window.confirm("Do you want delete item ?");
    if (text) {
      let newData = todos.filter((item: Todo) => {
        return item !== todo;
      });
      setTodos(newData);
      setData(newData);
    }
  };

  // const todos: Todo[] = [
  //   {
  //     text: "Go to work",
  //     isComplete: true,
  //   },
  //   {
  //     text: "Cooking",
  //     isComplete: false,
  //   },
  // ];

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Todo List/TINHTQ1</h1>
      <div className="app-content">
        <div className="app-todos">
          <AddTodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
