import React from 'react';
import Form from './components/Form';
import List from './components/List';
import { TodoContext } from './components/TodoContext';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Tarefas</h1>
      <TodoContext>
        <Form></Form>
        <List></List>
      </TodoContext>
    </div>
  );
};

export default App;
