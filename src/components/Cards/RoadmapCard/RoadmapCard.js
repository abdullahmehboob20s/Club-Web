import React from "react";
import styles from "./RoadmapCard.module.css";

function RoadmapCard({ index, title, desc }) {
  return (
    <div className={styles.roadmapCard_wrapper}>
      <div className={styles.roadmapCard}>
        <div className={styles.roadmapCardIndex}>{index}</div>
        <div>
          <h5 className="fs-26px white weight-5">{title}</h5>
          <p className="fs-18px light-purple weight-7">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
