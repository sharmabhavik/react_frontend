import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState("");
    let handleMessage = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div>
            <input type="text" value={message} placeholder="Enter your Message" onChange={handleMessage}/>
            <p>{message}</p>
        </div>
    )
}