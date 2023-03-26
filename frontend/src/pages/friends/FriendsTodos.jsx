import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FriendsTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch("http://localhost:5000/friends/todos", {
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
      });
      console.log(response)
      const data = await response.json();
      console.log(data)
      setTodos(data);
    };
    fetchTodo();
  }, []);

  return (
    <div>
      {todos && todos.map((item) => (
          <div key={item.description}>
            <p>{item.username} - {item.description}</p>
          </div>
        ))}
    </div>
  );

};
  
export default FriendsTodos;