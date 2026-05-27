import React from "react";

const CustomBtn = () => {
  let handleClick = (e) => {
    // alert("Button is Clicked!");
    console.log("Which Element is clicked", e.target);
    console.log("Coordinates of Elements are", e.clientX, e.clientY);
    console.log("Which Mouse Button", e.button);
  };

  return <button onClick={handleClick}>Like</button>;
};

export default CustomBtn;
