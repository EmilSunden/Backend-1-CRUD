import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/friends/todos">Friends</Link></li>
            <li><Link to="/friend">Add a friend</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar