import { useState} from 'react'

const SimpleStateHook = () => {
  const [count, setCount] = useState(0);
  
  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  function increment() {
    setCount(prevCount => prevCount + 1)
  }
  function reset(){
    setCount(0);
  }

  return (
    <>
      <button onClick = {decrement}>-</button>
      <span>{count}</span>
      <button onClick = {increment}>+</button>
      <button style= {{marginTop:"10px"}} onClick={reset}>Reset</button>
    </>
  )
}

export default SimpleStateHook
