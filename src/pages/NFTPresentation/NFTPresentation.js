import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./NFTPresentation.module.css";
import collectionData from "assets/data/collectionData.json";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
import Hero from "layouts/NFTPresentation_Page/Hero/Hero";
import Roadmap from "layouts/NFTPresentation_Page/Roadmap/Roadmap";
import Footer from "layouts/Footer/Footer";

const NFTPresentation = () => {
  return (
    <>
      <div className="mb-30px">
        <Navbar />
      </div>

      <div className="mb-70px">
        <Hero />
      </div>

      <div className="mb-100px">
        <div className="container-wrapper">
          <div className={styles.collections}>
            {collectionData.map((data, index) => (
              <CollectionCard data={data} />
            ))}
          </div>
        </div>
      </div>

      <Roadmap />

      <Footer />
    </>
  );
};

export default NFTPresentation;
