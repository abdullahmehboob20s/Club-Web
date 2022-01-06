import React from "react";
import About from "../../layouts/Home/About/About";
import Earning from "../../layouts/Home/Earning/Earning";
import Hero from "../../layouts/Home/Hero/Hero";
import Roadmap from "../../layouts/Home/Roadmap/Roadmap";
import Services from "../../layouts/Home/Services/Services";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <section className={styles.bannerWrapper}>
        <div className={styles.heroShadder}>
          <img
            src="https://launch.lambowhaleclub.com/assets/image/hero-shade-1.png"
            alt=""
          />
        </div>
        <div className={styles.heroShadder_2}>
          <img
            src="https://launch.lambowhaleclub.com/assets/image/hero-shade-2.png"
            alt=""
          />
        </div>
        <div className="mb-50px">
          <Navbar />
        </div>
        <div className="mb-100px">
          <Hero />
        </div>
        <div className="mb-70px">
          <Services />
        </div>
        <div className="mb-20px">
          <About />
        </div>
      </section>
      <div className="mb-70px">
        <Roadmap />
      </div>
      <div className="mb-100px">
        <Earning />
      </div>
    </div>
  );
}

export default Home;
