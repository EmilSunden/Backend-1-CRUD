import React from "react";
import { useState, useEffect } from "react";

import TodoList from "../../components/todolist/TodoList";
import TodoForm from "../../components/todolist/TodoForm";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos("http://localhost:5000/todos");
  }, []);

  const addTodo = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data)
  }

  return (
    <div>
      <h1>Todos:</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
