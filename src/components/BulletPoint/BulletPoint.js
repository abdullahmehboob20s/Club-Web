import React from "react";
import styles from "./BulletPoint.module.css";
import bulletpoint from "assets/images/bulletpoint.png";

const BulletPoint = ({
  title,
  titleClassName = "fs-16px light-purple uppercase",
}) => {
  return (
    <li className={styles.bulletPoint}>
      <img src={bulletpoint} alt="" />
      <p className={titleClassName}>{title}</p>
    </li>
  );
};
export default BulletPoint;
