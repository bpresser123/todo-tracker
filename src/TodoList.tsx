import React from 'react';
import { TodoListItem } from './TodoListItem';
import { ToggleTodo, Todo } from './types';

interface todoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<todoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
          return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
        })}
    </ul>
  )
};