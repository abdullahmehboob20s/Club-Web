import AuthorBar from "components/AuthorBar/AuthorBar";
import BulletPoint from "components/BulletPoint/BulletPoint";
import HoverButton from "components/Buttons/HoverButton/HoverButton";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./NFTPresentation.module.css";
import collectionData from "assets/data/collectionData.json";

const NFTPresentation = () => {
  return (
    <>
      <div className="mb-30px">
        <Navbar />
      </div>

      <div className="mb-70px">
        <div className="container-wrapper">
          <div className={styles.presentationHeader}>
            <div className="mb-30px">
              <p className="fs-72px text-center weight-7 lh-1  white">
                Discover the
              </p>
              <p className="fs-72px text-center blue weight-7 lh-1">
                LWC NFT Collection
              </p>
            </div>

            <p className="text-center fs-16px lh-2">
              Your NFT grants you access to all the benefits and works as a
              membership pass within the LWC community and all the other
              projects. Future developments and perks will be unlocked through
              the roadmap activation in Discord. Each Level gains different
              beneftis in the LWC World. 20% of all revenue from the
              LAMBOWHALECLUB COLLECTION will go directly back to the community
              and will be shared among all early bird Holders via Airdrop to get
              the feeling what passive income through NFT´s means!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-100px">
        <div className="container-wrapper">
          <div className={styles.collections}>
            {collectionData.map((data, index) => (
              <div className={styles.collection}>
                <div className={styles.collection_left}>
                  <video
                    src={data.video}
                    autoplay="autoplay"
                    loop
                    muted
                    className="mb-15px"
                  ></video>

                  <div className={styles.collection_authors}>
                    <AuthorBar
                      img={data.authors.createdBy.img}
                      title="Created by:"
                      name={data.authors.createdBy.name}
                    />
                    <AuthorBar
                      img={data.authors.ownedBy.img}
                      title="Created by:"
                      name={data.authors.ownedBy.name}
                    />
                  </div>
                </div>
                <div className={styles.collection_right}>
                  <p className="fs-52px white weight-7 mb-15px">
                    {data.type} <span className="blue">{data.typeTitle}</span>
                  </p>

                  <div className="mb-35px">
                    {data.points.map((data, index) => (
                      <BulletPoint
                        title={data.point}
                        titleClassName="fs-16px light-purple lh-2"
                      />
                    ))}
                  </div>

                  <div className={`${styles.collection_currentPrice} mb-30px`}>
                    <p className="fs-18px light-purple weight-6 lh-1 ">
                      Current Prize
                    </p>
                    <p className="fs-36px white weight-5 ">
                      {data.currentPrice} {data.priceFormat}
                    </p>
                  </div>

                  <HoverButton
                    title="GO TO OPENSEA"
                    reverse={true}
                    effect="bg-gradient-hover"
                    style={{
                      padding: "12px 26px",
                    }}
                    icon={
                      <img
                        src="https://launch.lambowhaleclub.com/assets/image/nft/btn_ic.svg"
                        alt=""
                      />
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTPresentation;
