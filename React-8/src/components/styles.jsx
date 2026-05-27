import React from "react";
import styles from "./styles.module.css";

const Styles = ({ children, type = "success" }) => {
  return (
    <>
      <div className={`${styles.design} ${styles[type]}`}>{children}</div>
    </>
  );
};

export default Styles;
