import React from "react";
import Footer from "../../layouts/Footer/Footer";
import About from "../../layouts/Home/About/About";
import Earning from "../../layouts/Home/Earning/Earning";
import Hero from "../../layouts/Home/Hero/Hero";
import Roadmap from "../../layouts/Home/Roadmap/Roadmap";
import Services from "../../layouts/Home/Services/Services";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";
import shadder1 from "assets/images/shadder-1.png";
import shadder2 from "assets/images/shadder-2.png";

function Home() {
  return (
    <div>
      <section className={styles.bannerWrapper}>
        <div className={styles.heroShadder}>
          <img src={shadder1} alt="" />
        </div>
        <div className={styles.heroShadder_2}>
          <img src={shadder2} alt="" />
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
        <div className="mb-20px" id="about">
          <About />
        </div>
      </section>
      <div className="mb-70px" id="roadmap">
        <Roadmap />
      </div>
      <div className="mb-100px">
        <Earning />
      </div>
      {/* <div className="mb-100px">
        <Blogs />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
