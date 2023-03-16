import React from "react";
import { useState, useEffect } from "react";

import TodoList from "../../components/todolist/TodoList";
import TodoForm from "../../components/todolist/TodoForm";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:5000/todos", {
        'credentials': 'include'
      });
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const response = await fetch('http://localhost:5000/todos', {
      'credentials': 'include'
    });
    const data = await response.json();
    setTodos(data)
  };

  return (
    <div>
      <h1>Todos:</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  );
};

export default Home;
