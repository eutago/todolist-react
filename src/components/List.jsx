import React, { useContext, useEffect, useState } from 'react';
import { contextForm } from './TodoContext';
import { FiTrash2 } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';

const List = () => {
  const [items, setItems] = useContext(contextForm);

  const onDone = (item) => {
    const updatedItems = items.map((itemTodo) => {
      if (itemTodo.id === item.id) {
        itemTodo.done = !itemTodo.done;
      }
      return itemTodo;
    });
    setItems(updatedItems);
  };

  const onDelete = (item) => {
    const updatedItems = items.filter((it) => it.id !== !item.id);
    setItems(updatedItems);
  };

  return (
    <ul className="List">
      {items.map((item) => (
        <li className={item.done ? 'done' : ''} key={item.id}>
          <div>
            <button onClick={() => onDone(item)} className="icon doneIcon">
              <MdDone></MdDone>
            </button>
            {item.text}
          </div>

          <button onClick={() => onDelete(item)} className="icon trashIcon">
            <FiTrash2></FiTrash2>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
