import React from "react";
import styles from "./AuthorBar.module.css";

function AuthorBar({ img, title, name }) {
  return (
    <div className={styles.collectionAuthor}>
      <img src={img} alt="" />
      <div>
        <p className="fs-16px light-purple mb-5px weight-4 lh-1">{title}</p>
        <p className="fs-18px white weight-7 lh-1">{name}</p>
      </div>
    </div>
  );
}

export default AuthorBar;
