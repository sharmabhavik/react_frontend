import React from "react";

const CustomButton = () => {
  let handleClick = () => {
    alert("Button Clicked");
  }
  return <button onClick={handleClick}></button>;
};

export default CustomButton;
