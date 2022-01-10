import React from "react";
import styles from "./EarningCard.module.css";
import discpurple from "assets/images/disc-purple.svg";

function EarningCard({ title, description }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={discpurple} alt="" />
      <h1 className="fs-36px white weight-5 mb-15px">{title}</h1>
      <p className="fs-16px lh-2 light-purple">{description}</p>
    </div>
  );
}

export default EarningCard;
