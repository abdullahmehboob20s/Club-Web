import React from "react";
import { Link } from "react-router-dom";
import styles from "./HoverButton.module.css";

function HoverButton({ title, fontSize = "fs-18px" }) {
  return (
    <Link className={`${styles.hoverButton} bg-gradient-hover-reverse `} to="/">
      <p className={`uppercase  ${fontSize} white weight-6`}>{title}</p>
    </Link>
  );
}

export default HoverButton;
