import React from "react";
import BulletPoint from "../../../components/BulletPoint/BulletPoint";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="container-wrapper">
      <div className={`${styles.hero} mb-70px`}>
        <div className={styles.hero_left}>
          <p className="fs-72px lh-1 white weight-7 mb-20px">
            Welcome to <br />
            <span className="fs-52px blue weight-7">LamboWhaleClub</span>
          </p>

          <p className="fs-16px lh-2 light-purple mb-20px">
            Everyone is talking about NFT´s and you are still not onto it? Join
            the LamboWhaleClub and do not miss this NFT opportunity of the
            century!
          </p>

          <ul className={styles.hero_bullet_points}>
            <BulletPoint title="EASY" />
            <BulletPoint title="100% FREE" />
            <BulletPoint title="INCOME GUARANTEED" />
          </ul>
        </div>
        <div className={styles.hero_right}>
          <iframe
            src="https://player.vimeo.com/video/653240048?h=3c0c9f071b&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="527"
            height="359"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen=""
            title="LWC Launch"
          ></iframe>
        </div>
      </div>

      {/* <button
        className={`${styles.heroDiscordBtn} pointer white uppercase bg-gradient-hover fs-16px weight-7`}
      >
        Join Discord
        <img
          src=""
          alt=""
        />
      </button> */}
    </div>
  );
}

export default Hero;
