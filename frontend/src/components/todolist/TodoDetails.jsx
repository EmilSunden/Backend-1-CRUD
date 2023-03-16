import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        credentials: "include",
      });
      const data = await response.json();
      setTodo(data);
    };
    fetchTodo();
  }, []);

  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/");
      } else {
        throw new Error("Failed to DELETE")
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleClick = () => {
    deleteTodo();
  };

  return (
    <div className="todo-details">
      {todo &&
        todo.map((item) => (
          <div key={item.description}>
            <p>{item.description}</p>
            <button onClick={handleClick}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default TodoDetails;
