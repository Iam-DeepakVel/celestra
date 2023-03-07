import React from "react";
import { Helmet } from "react-helmet";
import CountDown from "../countDown/CountDown";
import EventsGallery from "../events-gallery/EventsGallery";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Sponsors from "../sponsors/Sponsors";
import WorkshopSeminar from "../sponsors/WorkshopSeminar";
import Venue from "../venue/Venue";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CELESTRA | Home</title>
      </Helmet>
      <Hero />
      <Venue />
      <CountDown />
      <EventsGallery />
      <Sponsors />
      <WorkshopSeminar />
      <Footer />
    </div>
  );
};

export default Home;
