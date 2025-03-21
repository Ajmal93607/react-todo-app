import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const updateTodos = (updatedTodos) => setTodos(updatedTodos);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={(todo) => updateTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={(task, id) => updateTodos(todos.map((t) => (t.id === id ? { ...t, task, isEditing: false } : t)))} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={(id) => updateTodos(todos.filter((t) => t.id !== id))}
            editTodo={(id) => updateTodos(todos.map((t) => (t.id === id ? { ...t, isEditing: !t.isEditing } : t)))}
            toggleComplete={(id) => updateTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))}
          />
        )
      )}
    </div>
  );
};