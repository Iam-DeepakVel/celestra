import React from "react";
import CountDown from "../countDown/CountDown";
import Events from "../events/Events";
import Hero from "../hero/Hero";
import Venue from "../venue/Venue";

const Home = () => {
  return (
    <div>
      <Hero />
      <Venue />
      <CountDown />
      <Events />
    </div>
  );
};

export default Home;
