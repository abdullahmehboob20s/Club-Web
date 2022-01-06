import React from "react";
import styles from "./EarningCard.module.css";

function EarningCard({ title, description }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src="https://launch.lambowhaleclub.com/assets/image/earning-round.svg"
        alt=""
      />
      <h1 className="fs-36px white weight-5 mb-15px">{title}</h1>
      <p className="fs-16px lh-2 light-purple">{description}</p>
    </div>
  );
}

export default EarningCard;
