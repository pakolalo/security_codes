import React from 'react';
import { UseState } from './components/UseState/index';
import { ClassState } from './components/ClassState/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
    </div>
  );
}

export default App;
