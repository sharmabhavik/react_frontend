import { useRef, useState } from "react"

function Stopwatch() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if(intervalRef.current !== null) return
        
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        
        console.log("Timer is started");
        // console.log("Timer is started");
    }
    
    const stopTimer = () => {
        clearInterval(intervalRef.current)
        console.log("Timer is Stopped", intervalRef.current);
        intervalRef.current = null;
    }
    
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={startTimer}>
                Start
            </button>
            <button onClick={stopTimer}>
                Stop
            </button>
        </div>
    )
}

export default Stopwatch