import React from "react";
import { Link } from "react-router-dom";
import HoverButton from "../../components/Buttons/HoverButton/HoverButton";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <Link to={"/"}>
            <img
              src="https://launch.lambowhaleclub.com/assets/image/nft/logo.svg"
              alt=""
            />
          </Link>
          <div className={styles.navbarLinks}>
            <Link className="fs-18px white weight-6" to="/">
              Home
            </Link>
            <Link className="fs-18px white weight-6" to="/">
              About Us
            </Link>
            <Link className="fs-18px white weight-6" to="/">
              Roadmap
            </Link>
            <Link className="fs-18px white weight-6" to="/">
              Referral Club{" "}
            </Link>
            <HoverButton title={"Collection"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;