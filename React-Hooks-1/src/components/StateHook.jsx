import { useState } from 'react'

const StateHook = () => {
  const [count, setCount] = useState(() => {
    console.log("Initial State called")
    return 0;
  })
  
  let incrementCounter = () => {
    setCount(count + 1);
    console.log(count)
  }
  
  return (
    <div style={{marginTop:"50px"}}>
      <button style={{display:'block', marginInline:"auto"}}>Count: {count}</button>
      <button onClick={incrementCounter}>Increment Count</button>
    </div>
  )
}

export default StateHook