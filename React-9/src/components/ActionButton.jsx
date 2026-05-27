import React from "react";

const ActionButton = ({ text }) => {
  let name = "Vansh";
  let handleClick = () => {
    return <p>{`${name} clicked on ${text}`}</p>;
  };
  return (
    <>
      <button onClick={handleClick}>Like</button>
    </>
  );
};

export default ActionButton;
