import './App.css';
import GranParent1 from './components/GranParent1';
import GrandParent2 from './components/GrandParent2';
import GrandParent3 from './components/GrandParent3';
import React, { useReducer } from 'react';

export const CountContext = React.createContext()
const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h1>Count - {count}</h1>
        <GranParent1 />
        <GrandParent2 />
        <GrandParent3 />
      </CountContext.Provider>
    </div>
  );
}

export default App;
