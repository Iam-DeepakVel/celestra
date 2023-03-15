import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import SupersusImg from "../../assets/games-images/online/supersus.png";

const supersus = {
  image: SupersusImg,
  description:
    "Super Sus is a force to be reckoned with. With her lightning-fast reflexes and razor-sharp instincts, she can take on any challenge that comes her way. Her strategic mind is always analyzing the situation, looking for the best course of action.",
  type: "Online Games",
  eventName: "Super SUS",
  dateTime: "March 18,2:30PM - 3:30PM",
  venue: "IT-442",
  rules: [
    "Solo participation.",
    "Players must join the given room code and compete against co-participants.",
    "Players must join the given room code and compete against co-participants.",
  ],

  firstprize: 400,
  secondprize: 200,
  thirdprize: 100,
  contact: [
    {
      name: "Madhu siddharth",
      phoneNo: "9150223416",
    },
    {
      name: "Kiruthik Kumaar R",
      phoneNo: "9629867451",
    },
    {
      name: "Ashwin",
      phoneNo: "8754799651",
    },
  ],
};

const SuperSus = () => {
  return (
    <SingleEventPage
      eventDetails={supersus}
      formsLink={
        "https://docs.google.com/forms/d/e/1FAIpQLSd_nfWH69pIEEpsXGZAaB1PQmJ7kEChOmad3MQpxvJTqoSfGA/viewform?usp=sf_link"
      }
    />
  );
};

export default SuperSus;
