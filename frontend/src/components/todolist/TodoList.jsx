import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ul>
  )
}

export default TodoList