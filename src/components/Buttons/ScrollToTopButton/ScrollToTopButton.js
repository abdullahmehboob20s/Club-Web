import React from "react";
import styles from "./ScrollToTopButton.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

function ScrollToTopButton() {
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
    <button
      className={`${styles.scrollToTopBtn} ${
        scrolled ? styles.scrolled : ""
      } pointer `}
      onClick={() => scroll.scrollToTop({ duration: 1 })}
    >
      <IoIosArrowUp size={20} />
    </button>
  );
}

export default ScrollToTopButton;
