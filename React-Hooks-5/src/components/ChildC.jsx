import { useContext } from "react";
// import { UserContext } from "../App";
import { ThemeContext } from "../App";

const ChildC = () => {
//   const User = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  function handleTheme(){
    if(theme === "light"){
        setTheme('dark')
        console.log("Changed to Dark")
    }
    else{
        setTheme('light')
        console.log("Changed to Light")
    }
  }
  return (
    <div>
      {/* <p>Name: {User.name}</p>
      <p>Age: {User.age}</p> */}
      
      <button onClick={handleTheme}>Change theme</button>
      
    </div>
  )
}

export default ChildC
