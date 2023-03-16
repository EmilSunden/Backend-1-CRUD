import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const TodoDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState([])

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                'credentials': 'include'
            });
            console.log(response)
            const data = await response.json();
            console.log(data)
            setTodo(data)
        }
        fetchTodo()
    }, [])

  return (
    <div>
        id - {todo && todo.map(item => (
            <div key={item.description}>
                <p><Link to={`http://localhost:5000/todos/${id}`}>{item.description}</Link></p>
            </div>
        ))}
    </div>
  )
}

export default TodoDetails