export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

export type ToggleTodo = (selectedTodo: Todo) => void;
export type AddTodo = (text: string) => void;
export type DeleteItem = (id: Todo) => void;
// export type ID = (id: number) => void;
