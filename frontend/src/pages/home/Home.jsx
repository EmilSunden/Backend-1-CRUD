import React from "react";
import { useState, useEffect } from "react";

import TodoList from "../../components/todolist/TodoList";
import CreateTodo from "../../components/todolist/CreateTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:5000/todos", {
        credentials: 'include'
      });
      if(!response.ok) {
        throw new Error(`There are no todos to fetch!`)
      }
      const data = await response.json();  
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const response = await fetch('http://localhost:5000/todos', {
      credentials: 'include'
    });
    const data = await response.json();
    setTodos(data)
  };

  return (
    <div>
      <h1>Todos:</h1>
      <CreateTodo onAddTodo={addTodo} />
      {todos && <TodoList todos={todos}/>} 
    </div>
  );
};

export default Home;
