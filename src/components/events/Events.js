import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/c1.jpg";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ExploreButton from "../../common/ExploreButton";

const eventsList = [
  {
    id: 1,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 2,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 3,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 4,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 5,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 6,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
  },
  {
    id: 7,
    name: (
      <h2 className="text-2xl mb-2 tracking-widest text-center">
        {" "}
        <span className="text-4xl text-red-600 tracking-widest">C</span>
        oding Event
      </h2>
    ),
    image: slide_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt maiores similique quis, dicta veniam rerum, velit quae magnam optio sunt. Quidem harum adipisci maiores ex quaerat dolorem, molestiae culpa.",
    button: <ExploreButton />,
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
                  <h2 className="text-2xl mb-3 tracking-widest">
                    {" "}
                    <span className="text-4xl text-red-500 tracking-widest">
                      C
                    </span>
                    oding Event
                  </h2>
                  <p className="text-md mb-4">{event.description}</p>
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