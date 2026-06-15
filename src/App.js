import React from 'react';
import { UseState } from './components/UseState/index';
import { ClassState } from './components/ClassState/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;
