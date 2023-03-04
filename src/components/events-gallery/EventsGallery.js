import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events-gallery.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GiBrightExplosion } from "react-icons/gi";

// Events Gallery Images
import AnimeQuiz from "../../assets/event-images/animequiz.jpg";
import Pictionary from "../../assets/event-images/pictionary.jpeg";
import CelestraCoding from "../../assets/event-images/celestra-coding.jpg";
import Workshop from "../../assets/event-images/workshop.jpg";
import Valorant from "../../assets/event-images/valorantLogo2.jpg";
import OnlineGamesImg from "../../assets/games-images/online/online-games.jpg";
import OfflineGamesImg from "../../assets/games-images/offline/offline-games.jpg";
import { Link } from "react-router-dom";

const eventsList = [
  {
    id: 1,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        elestra Coding
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">C</span>
        elestra Coding
      </h2>
    ),
    image: CelestraCoding,
    description:
      "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
    path: "/events/celestra-coding",
  },
  {
    id: 2,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">A</span>
        nime Quiz
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">A</span>
        nime Quiz
      </h2>
    ),
    image: AnimeQuiz,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    path: "/events/anime-quiz",
  },
  {
    id: 3,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">V</span>
        alorant
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">V</span>
        alorant
      </h2>
    ),
    image: Valorant,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    path: "/events/valorant",
  },
  {
    id: 4,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">P</span>
        ictionary
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">P</span>
        ictionary
      </h2>
    ),
    image: Pictionary,
    description:
      "Get ready for a fun-filled pictionary event where you can put your guessing skills to the test! With simple rules and exciting gameplay, this event is perfect for participants of all skill levels. Join us for a chance to showcase your guessing talents and win big!",
    path: "/events/pictionary",
  },
  {
    id: 6,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">W</span>
        orkshop
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">W</span>
        orkshop
      </h2>
    ),
    image: Workshop,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    path: "/events/workshop",
  },
  {
    id: 7,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">O</span>
        nline Games
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">O</span>
        nline Games
      </h2>
    ),
    image: OnlineGamesImg,
    description:
      "Discover new horizons and challenge yourself with the ultimate online games experience!",
    path: "/games/online",
  },
  {
    id: 8,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">O</span>
        ffline Games
      </h2>
    ),
    hoverName: (
      <h2 className="text-2xl mb-3 tracking-widest">
        {" "}
        <span className="text-4xl text-red-500 tracking-widest">O</span>
        ffline Games
      </h2>
    ),
    image: OfflineGamesImg,
    description:
      "Step away from the screens and enjoy the timeless pleasure of offline games that never go out of style!",
    path: "/games/offline",
  },
];

const Events = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const handleMouseEnter = (id) => {
    setIsHovering(true);
    setCurrentCard(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleTouchStart = (id) => {
    setIsHovering(true);
    setCurrentCard(id);
  };

  return (
    <div className="cont">
      <div className="px-4 py-12  bg-black max-w-screen-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl pb-4 text-center text-white tracking-widest celestraHeroFont">
          <span className="text-6xl text-red-500 ">E</span>vents Gallery
        </h1>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {/* Event Card */}
          {eventsList?.map((event) => (
            <SwiperSlide>
              <div
                onMouseOver={() => handleMouseEnter(event.id)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(event.id)}
                className="relative"
              >
                <img src={event.image} alt="slide_image" />
                {(!isHovering || currentCard !== event.id) && (
                  <div className="absolute left-0 bottom-0 h-auto px-3 py-4 md:py-12 w-full celestraHeroFont text-white bg-[#0101017f]">
                    {event.name}
                  </div>
                )}
                <div
                  className={`absolute left-0 bottom-0 h-auto px-3 py-4 md:py-8 w-full celestraHeroFont text-white bg-[#0101019d] transition-opacity duration-300 ease-in-out ${
                    isHovering && currentCard === event.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {event.hoverName}
                  <p className="text-md mb-4">{event.description}</p>
                  {/* Explore Button */}
                  <button className="flex flex-col text-2xl">
                    <Link to={event.path} className="flex items-center">
                      <span className="text-4xl">E</span>
                      <span className="mt-2">xplore </span>
                      <span className="ml-4 mt-1">
                        <GiBrightExplosion size={25} color="red" />
                      </span>
                    </Link>
                    <div className="h-1  w-[30%] sm:w-[40%] lg:w-[50%]  bg-red-500 rounded-full"></div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Slide Controller */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowBack color="black" size={25} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoIosArrowForward color="black" size={25} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
