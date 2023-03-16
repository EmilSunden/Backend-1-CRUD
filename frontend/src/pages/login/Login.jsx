import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include'
    });
    if (response.ok) {
      console.log(`Logged in as ${username}`)
      navigate('/');
    } else {
      throw new Error('Login failed')
    }
    } catch (error) {
      console.error('Error', error)
    }
  }

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
      <button type="submit">Login</button>
    </form>
  )
}

export default Login