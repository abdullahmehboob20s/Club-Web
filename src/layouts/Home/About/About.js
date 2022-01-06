import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className="container-wrapper">
      <div className={styles.about}>
        <img
          src="https://launch.lambowhaleclub.com/assets/image/about-img.png"
          className={styles.about_img}
          alt=""
        />
        <div className={styles.about_right}>
          <p className="fs-52px weight-7 lh-1 mb-30px">
            <span className="white block">EMPOWER YOUR</span>
            <span className="blue block">CRYPTO WEALTH</span>
          </p>
          <p className="fs-16px light-purple lh-2 mb-25px">
            LWC is building long term value on a 5 year vision. With every new
            partner and member, the value of the network is growing. LWC is
            based on the Polygon/Ethereum Virtual Machine - compatible Ethereum
            Smart Contract system allowing for cross-chain opportunities.
          </p>
          <p className="fs-16px light-purple lh-2">
            We anticipate a sustained role for NFTs in gaming and entertainment,
            and our goal is to make NFTs approachable, accessible, and fun for a
            wide range of players and collectors. Becoming a Lambowhaleclub
            Member introduces you to a PRIVATE MASTERMIND level of elite
            entrepreneurs in the Decentralized Internet World.We are ready for
            the METAVERSE, all the assets of your NFTs will be usable in the
            METAVERSE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
