import React from "react";
import { Link } from "react-router-dom";
import styles from "./HoverButton.module.css";

function HoverButton({
  title,
  fontSize = "fs-18px",
  to = "/",
  icon = false,
  style,
  reverse = false,
  effect = "bg-gradient-hover-reverse",
}) {
  return (
    <Link
      style={style}
      className={`${styles.hoverButton} ${
        reverse ? styles.reverse : ""
      } ${effect} `}
      to={to}
    >
      <p className={`uppercase  ${fontSize}   weight-6`}>{title}</p>

      {icon ? icon : ""}
    </Link>
  );
}

export default HoverButton;
