import React from "react";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      });
      if (response.ok) {
        navigate('/')
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button>Register</button>
    </form>
  );
};

export default Register;
