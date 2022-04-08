import { Todo } from "../types";
export function setData(arr: Todo[]) {
  localStorage.setItem("list-todo", JSON.stringify(arr));
}
export function getData() {
  let xxx = localStorage.getItem("list-todo");
  if (!xxx) {
    return [];
  }
  let data = JSON.parse(localStorage.getItem("list-todo") || "") || [];
  return data;
}
