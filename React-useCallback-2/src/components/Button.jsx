import React from "react";

const Button = React.memo(({ handleClick }) => {

  console.log("Child Re-Rendered");

  return (
    <button onClick={handleClick}>
      Increment
    </button>
  );
});

export default Button;