import React from 'react';

export const EditTodoForm = ({ editTodo, task }) => (
  <form onSubmit={(e) => { e.preventDefault(); editTodo(e.target[0].value, task.id); }} className="TodoForm">
    <input type="text" defaultValue={task.task} className="todo-input" placeholder="Update task" />
    <button type="submit" className="todo-btn">Update Task</button>
  </form>
);