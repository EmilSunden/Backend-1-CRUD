import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App