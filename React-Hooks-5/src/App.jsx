import { createContext } from 'react'
import './App.css'
import { useState } from 'react';
import ChildA from './components/ChildA';

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [obj, setObj] = useState({
  //   name: "Bhavik",
  //   age: 20
  // });
  
  const [theme, setTheme] = useState("light");
  
  return (
    <>
      {/* <UserContext.Provider value={obj}>
        <ChildA />
      </UserContext.Provider> */}
      
      <ThemeContext value= {{theme, setTheme}}>
          <div style={{backgroundColor:theme === "light" ? "aqua" : "black"}} id='container'>
            <ChildA />
          </div>
      </ThemeContext>
    </>
  )
}

export default App
// export {UserContext};
export {ThemeContext}
