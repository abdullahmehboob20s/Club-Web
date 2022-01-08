import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../../layouts/Footer/Footer";
import About from "../../layouts/Home/About/About";
import Blogs from "../../layouts/Home/Blogs/Blogs";
import Earning from "../../layouts/Home/Earning/Earning";
import Hero from "../../layouts/Home/Hero/Hero";
import Roadmap from "../../layouts/Home/Roadmap/Roadmap";
import Services from "../../layouts/Home/Services/Services";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

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

      <button
        className={`${styles.scrollToTopBtn} ${
          scrolled ? styles.scrolled : ""
        } pointer `}
        onClick={() => scroll.scrollToTop({ duration: 1 })}
      >
        <IoIosArrowUp size={20} />
      </button>
    </div>
  );
}

export default Home;
