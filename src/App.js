import React from 'react';
import { UseState } from './components/UseState/index';
import { UseReducer } from './components/UseReducer/index';
import './App.css';

/**
 * Main App component that demonstrates React state management patterns.
 * Renders two security code verification components using different state management approaches:
 * - UseState: Shows state management with useState hook
 * - UseReducer: Shows state management with useReducer hook
 */
function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <UseReducer name="UseReducer" />
    </div>
  );
}

export default App;
