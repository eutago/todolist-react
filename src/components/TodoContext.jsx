import React, { useState, createContext } from 'react';
import Item from './Item';

export const contextForm = createContext();

export const TodoContext = (props) => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const newTodo = new Item(input);

  return (
    <contextForm.Provider value={[items, setItems, input, setInput, newTodo]}>
      {props.children}
    </contextForm.Provider>
  );
};
