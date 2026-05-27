import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {

  const [move, setMove] = useState(false);

  const boxRef = useRef();

  useLayoutEffect(() => {

    if (move) {
      boxRef.current.style.transform = "translateX(500px)";
    }

  }, [move]);

  return (
    <div style={{ padding: "50px" }}>

      <button onClick={() => setMove(true)}>
        Change Position
      </button>

      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "tomato",
          marginTop: "30px"
        }}
      />

    </div>
  );
}

export default UseLayoutEffect;