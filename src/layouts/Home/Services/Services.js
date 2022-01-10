import React from "react";
import ServiceCard from "../../../components/Cards/ServiceCard/ServiceCard";
import styles from "./Services.module.css";
import serviceCardIcon1 from "assets/images/service-card-icon-1.svg";
import serviceCardIcon2 from "assets/images/service-card-icon-2.svg";
import serviceCardIcon3 from "assets/images/service-card-icon-3.svg";

function Services() {
  return (
    <div className="container-wrapper">
      <div className={styles.cards}>
        <ServiceCard
          img={serviceCardIcon1}
          titles={["Earn Lifetime Revenues and Profits"]}
          description="Our community will offer lifetime revenue profit shares if you invite your friends to join the METABILLIONS family."
        />
        <ServiceCard
          img={serviceCardIcon2}
          titles={["Community Approved", "Cointips and Hot NFTs"]}
          description="The Altcoin and NFT djungle can get very wild and dangerous sometimes. We navigate you trough this djungle and make sure that you won't get lost"
        />
        <ServiceCard
          img={serviceCardIcon3}
          titles={["The Most Skilled", "Moderators & Admins"]}
          description="Our moderator and admin teams consist of well vetted crypto veterans with long-year experience in all the different niches. We are here 24/7 to help and support you whenever you need us."
        />
      </div>
    </div>
  );
}

export default Services;
