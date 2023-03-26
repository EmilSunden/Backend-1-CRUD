import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
  return (
   <div className="todo-list">
      {todos && todos.map(todo => (
        <div key={todo.id} className="todo-preview">
          <Link to={`/todos/${todo.id}`} className="todo-link">
            <p>{todo.description}</p>
          </Link>
        </div>
      ))} 
   </div>
  );
};

export default TodoList;


