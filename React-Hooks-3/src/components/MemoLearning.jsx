import { useEffect } from 'react';
import { useMemo } from 'react';
import {useState} from 'react'

const MemoLearning = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleValue = useMemo(() => {
    return slowFunction(number)
  }, [number]);
  
  const themeStyles = useMemo(() => {
    return {
        backgroundColor: dark ? "black": "white",
        color: dark ? "white": "black"
    }
    }, [dark])
    useEffect(() => {
    console.log("Theme changed")
    }, [themeStyles])

    
  return (
    <>
      <input type="number" placeholder='Enter a Number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleValue}</div>
    </>
  )
}

  function slowFunction(num){
    for(let i=0; i<=1000000000; i++){}
    return num * 2;
  }

export default MemoLearning
