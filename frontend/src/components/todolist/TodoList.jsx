import React from 'react';
import { useEffect, useState } from 'react';

const TodoList = ({ todo }) => {
    const [todos, setTodos] = useState();

   useEffect(() => {
    // const data = fetch('http://localhost:5000/todos');
    
   })

  //  TODO: FIX 500 error on GET

  return (
    <div>
        todos
    </div>
  )
}

export default TodoList