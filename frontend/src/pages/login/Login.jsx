import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return loggedInUser;
  }
// TODO: REDIRECT ON LOGIN;
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
      <button>Login</button>
    </form>
  )
}

export default Login