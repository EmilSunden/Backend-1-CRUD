import React, { useEffect, useState } from "react";

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
      const data = await response.json();
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