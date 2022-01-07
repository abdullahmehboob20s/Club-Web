import React from "react";
import BlogCard from "../../../components/Cards/BlogCard/BlogCard";
import "./Blogs.css";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const blogsData = [
  {
    img: "https://launch.lambowhaleclub.com/assets/image/blog-img-1.png",
    title: "NFT and Crypto",
    desc: "NFT-linked cryptocurrencies rose 42 percent in November as interest in the Metaverse grew. The Metaverse is a collective word for virtual environments where avatars play games, work, create, and watch…",
  },
  {
    img: "https://launch.lambowhaleclub.com/assets/image/blog-img-3.png",
    title: "Metamask",
    desc: "MetaMask is a crypto and NFT wallet available as a mobile app or a browser plugin for Ethereum'sDapp ecosystem. It also acts as a wallet for ERC-20 tokens, letting users…",
  },
  {
    img: "https://launch.lambowhaleclub.com/assets/image/blog-img-2.png",
    title: "What is the Metaverse?",
    desc: 'Virtual worlds were formerly exclusively seen in science fiction literature. The term "metaverse" is now one of the hottest in industry, adopted by software and game creators in sectors ranging…',
  },
];

function Blogs() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  return (
    <div className="container-wrapper relative">
      <div className="mb-40px">
        <h1 className="fs-52px white weight-6 mb-10px">
          LWC <span className="blue">Blog</span>
        </h1>
        <p className="fs-16px light-purple lh-2">
          We make sure that you stay always up to date and that you will not
          miss the latest moves in the NFT space. Subscribe to our free blog
          today!
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          850: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1.5,
          },
          200: {
            slidesPerView: 1,
          },
        }}
      >
        {blogsData.map((blog, index) => (
          <SwiperSlide>
            <BlogCard
              img={blog.img}
              title={blog.title}
              desc={blog.desc}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="blogs_btns">
        <button
          className="blogs_btn _left pointer white"
          ref={navigationPrevRef}
        >
          <IoIosArrowBack size={35} />
        </button>
        <button
          className="blogs_btn _right pointer white"
          ref={navigationNextRef}
        >
          <IoIosArrowForward size={35} />
        </button>
      </div>
    </div>
  );
}

export default Blogs;
