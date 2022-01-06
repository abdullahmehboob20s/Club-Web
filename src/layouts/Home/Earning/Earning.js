import React from "react";
import HoverButton from "../../../components/Buttons/HoverButton/HoverButton";
import EarningCard from "../../../components/Cards/EarningCard/EarningCard";
import styles from "./Earning.module.css";

function Earning() {
  return (
    <div className="container-wrapper">
      <div className="mb-70px">
        <div className={styles.header}>
          <h1 className="fs-52px white weight-7 text-center mb-10px">
            LWC Earning <span className="blue">Program</span>
          </h1>
          <p className="fs-16px light-blue text-center lh-2">
            Want to make money without leaving home during the coronavirus
            pandemic? Or do you want to figure out ways to make money online
            with the hyping NFT Market so that you can fund your travels when
            coronavirus subsides? Making Money with LWC is easy as writtng and
            Whatsapp Message.
          </p>
        </div>
      </div>
      <div className={`${styles.card} mb-100px`}>
        <EarningCard
          title="Cointips"
          description="Join the LamboWhaleClub and get exclusive access to the hottest cointips on the market. Our team of expert traders analzye the market 24/7 and we gonna let you know if anything hot comes up."
        />
        <EarningCard
          title="Refer a Friend"
          description="The first NFT Multi Tier Commission Plan (of its kind) that rewards you when your friends join the LamboWahleClub. LWC pays out commission up to 35% on 3 levels. You can not miss on this one! Signup now, refer 3 friends and get instant access to the exclusive members area."
        />
        <EarningCard
          title="The Rarest NFTs"
          description="Get access to the HOTTEST and RAREST NFT's of our community! We will not let you down on this done!"
        />
      </div>
      <div className="w-fit-content margin-center">
        <HoverButton fontSize="fs-16px" title="SIGN ME UP NOW" />
      </div>
    </div>
  );
}

export default Earning;
