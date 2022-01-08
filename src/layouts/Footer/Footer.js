import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section class={styles.footer_wrapper}>
      <footer>
        <div class="container-wrapper text-center">
          <div class="mb-40px">
            <h3 class="fs-26px white weight-5 mb-15px">
              LAMBOWHALECLUB - COINTIPS &amp; NFT
            </h3>
            <p className="fs-16px light-gray ">
              The first NFT Multi Tier Commission Plan on the Market
            </p>
          </div>
          <div class={styles.socail_icon}>
            <a
              href="https://t.me/+Nz00-bTpruEwYmVk"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://launch.lambowhaleclub.com/assets/image/telegram.svg"
                alt="telegram"
              />
            </a>
            <a
              href="https://twitter.com/LamboWhaleClub"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://launch.lambowhaleclub.com/assets/image/twitter.svg"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/lambowhaleclub/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://launch.lambowhaleclub.com/assets/image/instagram.svg"
                alt="instagram"
              />
            </a>
            {/* <a
              href="https://discord.gg/FKM2pQEKkE"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://launch.lambowhaleclub.com/assets/image/discord.svg"
                alt="discord"
              />
            </a> */}
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
