import React from "react";
import BulletPoint from "../../../components/BulletPoint/BulletPoint";
import "./Roadmap.css";
import roadmapLine1 from "assets/images/home-roadmap-line-1.png";
import roadmapLine2 from "assets/images/home-roadmap-line-2.svg";

const RoadmapPoint = ({ title, points }) => {
  return (
    <div>
      <p className="fs-26px mb-10px white weight-5">{title}</p>
      {points.map((point, index) => (
        <BulletPoint titleClassName="fs-16px light-purple" title={point} />
      ))}
    </div>
  );
};

function Roadmap() {
  return (
    <div className={`${"roadmapWrapper"} py-100px`}>
      <div className="container-wrapper">
        <h1 className="text-center fs-52px white mb-25px">
          LWC <span className="blue">Roadmap</span>
        </h1>
      </div>
      <div className={"roadmapPointsParent"}>
        <div className={"roadmapPoints"}>
          <div className="mb-30px">
            <div className="container-wrapper ">
              <div className={"roadmap_points _1"}>
                <RoadmapPoint
                  title="Early Q4 2021 - Initial Launch"
                  points={[
                    "Launch of Eduactional Telegram Channel",
                    "Discord Server with Phase 1 Referral",
                    "Gathering of Admin and Moderator Team",
                  ]}
                />
                <RoadmapPoint
                  title="Q1 2022 - LAUNCH NFT Plattform"
                  points={[
                    "NFT Marketplace",
                    "Unique Referral System",
                    "Leaderboard",
                  ]}
                />
                <RoadmapPoint
                  title="Q3 - Launch LWC Metaverse"
                  points={[
                    "Focus on iGaming crossbridge Cryptoverse",
                    "Minting NFT Collection V3",
                    "Become your own Casino Game Owner",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mb-30px">
            <img src={roadmapLine1} className={"roadmapImg"} alt="" />
            <img src={roadmapLine2} alt="roadmap" class={"rdm_mobile_img"} />
          </div>
          <div className="container-wrapper ">
            <div className={"roadmap_points _2"}>
              <RoadmapPoint
                title="Q4 2021 - NFT Collection 1"
                points={[
                  "Minting NFT Collections V1",
                  "Onboard Influencers",
                  "Showcase own NFT Marketplace",
                ]}
              />
              <RoadmapPoint
                title="Q2 -LWC Celebrity Club"
                points={[
                  "Minting NFT Collection V2",
                  "Secret Superstar reveal",
                  "Meet and Great in Mexico with initial NFT Holders",
                ]}
              />
              <RoadmapPoint
                title="Q4 2022 - Advanced Metaverse"
                points={[
                  "Onboard iGaming Providers",
                  "Selling first Land to Casinos",
                  "Connecting Streamers to LWC",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
