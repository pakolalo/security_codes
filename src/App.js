import React from 'react';
import { UseState } from './components/UseState/index';
import { UseReducer } from './components/UseReducer/index';
import './App.css';
import { ClassState } from './components/ClassState';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="UseClassState"></ClassState>
      <UseReducer name="UseReducer"/>
    </div>
  );
}

export default App;
