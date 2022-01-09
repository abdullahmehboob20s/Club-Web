import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="container-wrapper nftpresentation-home">
      <div className={styles.presentationHeader}>
        <div className="mb-30px">
          <p className="fs-72px text-center weight-7 lh-1  white">
            Discover the
          </p>
          <p className="fs-72px text-center blue weight-7 lh-1">
            LWC NFT Collection
          </p>
        </div>

        <p className="text-center fs-16px lh-2">
          Your NFT grants you access to all the benefits and works as a
          membership pass within the LWC community and all the other projects.
          Future developments and perks will be unlocked through the roadmap
          activation in Discord. Each Level gains different beneftis in the LWC
          World. 20% of all revenue from the LAMBOWHALECLUB COLLECTION will go
          directly back to the community and will be shared among all early bird
          Holders via Airdrop to get the feeling what passive income through
          NFT´s means!
        </p>
      </div>
    </div>
  );
}

export default Hero;
