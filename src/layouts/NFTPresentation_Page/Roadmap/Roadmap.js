import RoadmapCard from "components/Cards/RoadmapCard/RoadmapCard";
import React from "react";
import styles from "./Roadmap.module.css";
import roadmapData from "assets/data/roadmapData.json";

function Roadmap() {
  return (
    <div className="container-wrapper">
      <div className="text-center mb-50px">
        <div className="mb-5px">
          <p className="fs-52px weight-7 white lh-1">Minting and Events</p>
          <p className="fs-52px weight-7 blue ">Road Map</p>
        </div>

        <p className="fs-16px white-4 light-purple">
          All holders with at least 2 Early Bird NFT’s will receive a free NFT
          Airdrop from the next collection.
        </p>
      </div>

      <div className={styles.roadmap}>
        <div className={styles.roadmap_left}>
          <img
            src="https://launch.lambowhaleclub.com/assets/image/nft/nft_road_map.png"
            alt=""
          />
        </div>
        <div className={styles.roadmap_right}>
          {roadmapData.map((data, index) => (
            <RoadmapCard
              key={index}
              index={index + 1}
              title={data.title}
              desc={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
