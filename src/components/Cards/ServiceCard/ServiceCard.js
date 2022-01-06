import React from "react";
import styles from "./ServiceCard.module.css";

function ServiceCard({ titles, description, img }) {
  return (
    <div className={`${styles.serviceCard} text-center`}>
      <img src={img} alt="" />
      <p className="fs-26px white  weight-6 mb-15px">
        {titles.map((title, index) => (
          <span className="block" key={index}>
            {title}
          </span>
        ))}
      </p>
      <p className="fs-16px light-purple lh-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
