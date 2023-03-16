import React from "react";
import { Link } from "react-router-dom";

import TodoDetails from "./TodoDetails";


const TodoList = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {/* <Link to={`http://localhost:5000/todos/${item.id}`}>{item.description}</Link> */}
            <TodoDetails />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
