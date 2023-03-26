import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import TodoDetails from './components/todolist/TodoDetails';
import NotFound from './components/errorhandler/NotFound';
import FriendsTodos from './pages/friends/FriendsTodos';
import AddFriend from './pages/friends/AddFriend';


const App = () => {
  return (
    <BrowserRouter>
        <div className="content">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/todos/:id" element={<TodoDetails />}></Route>
              <Route path="/friend" element={<AddFriend />}></Route>
              <Route path="/friends/todos" element={<FriendsTodos />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App