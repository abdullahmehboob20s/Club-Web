import AuthorBar from "components/AuthorBar/AuthorBar";
import BulletPoint from "components/BulletPoint/BulletPoint";
import HoverButton from "components/Buttons/HoverButton/HoverButton";
import React from "react";
import styles from "./CollectionCard.module.css";
import video from "assets/images/video.mp4";
import btn_icon from "assets/images/btn_ic.svg";

function CollectionCard({ data }) {
  return (
    <div className={styles.collection}>
      <div className={styles.collection_left}>
        <video
          // Can be loaded from json ( data.video ) or can be loaded like this from the assets folder
          src={video}
          autoplay="autoplay"
          loop
          muted
          className="mb-15px"
        ></video>

        <div className={styles.collection_authors}>
          <AuthorBar
            img={data.authors.createdBy.img}
            title="Created by:"
            name={data.authors.createdBy.name}
          />
          <AuthorBar
            img={data.authors.ownedBy.img}
            title="Owned by:"
            name={data.authors.ownedBy.name}
          />
        </div>
      </div>
      <div className={styles.collection_right}>
        <p className="fs-52px white weight-7 mb-15px">
          {data.type} <span className="blue">{data.typeTitle}</span>
        </p>

        <div className="mb-35px">
          {data.points.map((data, index) => (
            <BulletPoint
              title={data.point}
              titleClassName="fs-16px light-purple lh-2"
            />
          ))}
        </div>

        <div className={`${styles.collection_currentPrice} mb-30px`}>
          <p className="fs-18px light-purple weight-6 lh-1 ">Current Prize</p>
          <p className="fs-36px white weight-5 ">
            {data.currentPrice} {data.priceFormat}
          </p>
        </div>

        <HoverButton
          title="GO TO OPENSEA"
          reverse={true}
          effect="bg-gradient-hover"
          style={{
            padding: "12px 26px",
          }}
          icon={<img src={btn_icon} alt="" />}
        />
      </div>
    </div>
  );
}

export default CollectionCard;
