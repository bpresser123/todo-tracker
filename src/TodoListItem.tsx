import React from "react";

//should not need to do this import
import { Todo, ToggleTodo } from "./types";

import "./todoListItem.scss";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
          {todo.text}
      </label>
    </li>
  );
};