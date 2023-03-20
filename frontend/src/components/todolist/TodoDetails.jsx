import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [newTodoDescription, setNewTodoDescription] = useState("");

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
  
  const handleDelete = () => {
    deleteTodo();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: newTodoDescription,
        }),
        credentials: "include",
      });
      if (response.ok) {
        // Redirect to the updated todo details page
        navigate('/');
      } else {
        throw new Error("Failed to PATCH");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="todo-details">
      {todo &&
        todo.map((item) => (
          <div key={item.description}>
            <p>{item.description}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
        ))}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default TodoDetails;
