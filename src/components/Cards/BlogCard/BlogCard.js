import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

function BlogCard({ img, title, desc }) {
  return (
    <div>
      <div className={`${styles.cardImg} mb-20px`}>
        <img src={img} alt="" />
      </div>
      <Link
        to={"/"}
        className={`${styles.cardLink} fs-26px white weight-5 mb-10px inline-block`}
      >
        {title}
      </Link>

      <p className="fs-16px lh-2 light-purple">{desc}</p>
    </div>
  );
}

export default BlogCard;
