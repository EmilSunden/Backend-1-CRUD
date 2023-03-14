import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return registeredUser;
  };
  // TODO: REDIRECT ON REGISTER

  return (
    <form onClick={handleSubmit}>
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
