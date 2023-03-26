import React, { useState } from 'react';

const CreateTodo = ({ onAddTodo }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newTodo = { description };
        try {
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            onAddTodo(data);
            setDescription('')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Enter todo'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default CreateTodo