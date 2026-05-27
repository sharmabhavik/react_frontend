import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  
  const {count, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>Number: {count}</span>
      <button onClick={increment}>+</button>
      <button onClick= {reset}>Reset</button>
    </>
  )
}

export default App
