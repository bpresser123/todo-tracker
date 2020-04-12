import React, { useState } from 'react';

//should not need to do this import
// import { Todo, ToggleTodo, AddTodo } from './types';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: "Groceries", complete: false }, 
  { text: "Work", complete: false }
];

const App: React.FC = () => {

  const [updatedTodos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = updatedTodos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo, 
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...updatedTodos, { text: newTodo, complete: false }])
  }

  return (
    <React.Fragment>
      <TodoList todos={updatedTodos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  );
}

export default App;