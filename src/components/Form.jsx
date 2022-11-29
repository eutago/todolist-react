import React, { useState, useContext, useEffect } from 'react';
import { contextForm } from './TodoContext';

const Form = () => {
  const [items, setItems, input, setInput, newTodo] = useContext(contextForm);

  const addTodo = (event) => {
    event.preventDefault();
    if (input) {
      setItems([...items, newTodo]);
      setInput('');
    } else {
      alert('Digite uma tarefa');
    }
  };

  return (
    <form className="Form">
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        placeholder="Digite sua tarefa"
      />
      <button onClick={addTodo}>Add</button>
    </form>
  );
};

export default Form;
