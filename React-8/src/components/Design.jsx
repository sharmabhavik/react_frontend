import React from "react";
import "./Design.css";

const Design = ({ children, type = "success" }) => {
  return (
    <>
      <div className={`design ${type}`}>{children}</div>
    </>
  );
};

export default Design;
