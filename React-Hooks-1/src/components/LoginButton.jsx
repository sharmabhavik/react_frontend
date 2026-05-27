import { useState } from "react"

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let handleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
      console.log("isLoggedIn:", isLoggedIn);
  }
  return (
    <div>
      <button onClick = {handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  )
}

export default LoginButton
