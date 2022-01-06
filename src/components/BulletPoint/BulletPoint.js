import React from "react";
import styles from "./BulletPoint.module.css";

const BulletPoint = ({
  title,
  titleClassName = "fs-16px light-purple uppercase",
}) => {
  return (
    <li className={styles.bulletPoint}>
      <img
        src="https://launch.lambowhaleclub.com/assets/image/dots.png"
        alt=""
      />
      <p className={titleClassName}>{title}</p>
    </li>
  );
};
export default BulletPoint;
