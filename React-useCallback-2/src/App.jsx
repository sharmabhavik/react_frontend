// import { useState } from "react";
// import Button from "./components/Button";


// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     console.log("Increment Function");
//     setCount(prev => prev + 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increment Count
//       </button>

//       <Button handleClick={handleClick} />
//     </>
//   );
// }

// export default App;



import { useState, useCallback } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Increment Function");
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
      <Button handleClick={handleClick} />
    </>
  );
}

export default App;