import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import SupersusImg from "../../assets/games-images/online/supersus.png";

const supersus = {
  image: SupersusImg,
  description:
    "Super Sus is a force to be reckoned with. With her lightning-fast reflexes and razor-sharp instincts, she can take on any challenge that comes her way. Her strategic mind is always analyzing the situation, looking for the best course of action.",
  type: "Online Games",
  eventName: "Super SUS",
  dateTime: "March 18, 11:00 AM to 1:00 PM ",
  venue: "IT-442",
  rules: ["Solo participation.", "Players must join the given room code and compete against co-participants.","Players must join the given room code and compete against co-participants."],
  firstprize: 400,
  secondprize: 200,
  thirdprize: 100,
  contact: [
    {
      name: "Name1",
      phoneNo: "9876654322",
    },
    {
      name: "Name2",
      phoneNo: "78987998790",
    },
  ],
};

const SuperSus = () => {
  return <SingleEventPage eventDetails={supersus} />;
};

export default SuperSus;
