import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFriend = () => {
    const navigate = useNavigate();
    const [friend, setFriend] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newFriend = { friend }
        try {
            const response = await fetch('http://localhost:5000/friend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(newFriend)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            } 
            const data = await response.json();
            setFriend(data);
            navigate('/friends/todos')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add friend'
        value={friend}
        onChange={(e) => setFriend(e.target.value)}
        />
        <button type="submit">Add Friend</button>
    </form>
  )
}

export default AddFriend