import { useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    console.log("Count is: ", count);
    setCount(count + 1);
    
    console.log("Count is: ", count);
    setCount(count + 5);
    
    console.log("Count is: ", count);
    setCount(count + 10);
    
    setTimeout(() => {
        console.log("Count after 2 seconds is: ", count);
    }, 2000);
  }
  return (
    <div>
      <button>Count: {count}</button>
      <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default Counter
