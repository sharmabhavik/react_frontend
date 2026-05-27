// import { useEffect, useRef } from "react";

// function App() {

//   const boxRef = useRef();

//   useEffect(() => {

//     boxRef.current.style.transform = "translateX(300px)";

//   }, []);

//   return (
//     <div
//       ref={boxRef}
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "tomato",
//         transition: "all 0.5s"
//       }}
//     />
//   );
// }

// export default App;



// import { useLayoutEffect, useRef } from "react";

// function App() {

//   const boxRef = useRef();

//   useLayoutEffect(() => {

//     boxRef.current.style.transform = "translateX(300px)";

//   }, []);

//   return (
//     <div
//       ref={boxRef}
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "tomato",
//         transition: "all 0.5s"
//       }}
//     />
//   );
// }

// export default App;


// import LayoutEffect from "./components/LayoutEffect";
// import LayoutEffects from "./components/LayoutEffects"
// import UseEffect from "./components/UseEffect"
import UseLayoutEffect from "./components/UseLayoutEffect"

function App(){
  return(
    <div>
      {/* <LayoutEffect /> */}
      {/* <LayoutEffects /> */}
      {/* <UseEffect /> */}
      <UseLayoutEffect />
      
    </div>
  )
}

export default App