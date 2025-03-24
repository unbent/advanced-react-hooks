// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, action) => {
    switch(action.type) {
      case 'INCREMENT': 
        return {...state, count: state.count + action.step};
      default:
        return {...state, ...(typeof action === 'function' ? action() : action)};
    }
  }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
