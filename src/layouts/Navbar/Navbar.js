import React from "react";
import { Link } from "react-router-dom";
import HoverButton from "../../components/Buttons/HoverButton/HoverButton";
import styles from "./Navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "assets/images/logo.svg";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className={styles.navbarLinks}>
            <Link className="fs-18px white weight-6" to="/">
              Home
            </Link>
            <ScrollLink className="fs-18px white pointer weight-6" to="about">
              About Us
            </ScrollLink>
            <ScrollLink className="fs-18px white pointer weight-6" to="roadmap">
              Roadmap
            </ScrollLink>
            <Link className="fs-18px white weight-6" to="/">
              Referral Club{" "}
            </Link>
            <HoverButton to="/nft-presentaion" title={"Collection"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
