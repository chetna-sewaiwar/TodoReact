import React, { useState } from 'react';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo !== '') {
      setTodo((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (chetna) => {
    setTodo((prevTodos) => prevTodos.filter(( _,i) => i !== chetna));
  };

  return (
    <div>
      <h1>Todo App With State</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      
        {todo.map((todo, index) => (
          <div key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
     
    </div>
  );
};

export default TodoApp;