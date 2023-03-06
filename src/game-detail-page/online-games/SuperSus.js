import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import SupersusImg from "../../assets/games-images/online/supersus.png";

const supersus = {
  image: SupersusImg,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam deleniti consequuntur esse error libero omnis voluptatibus saepe facere cumque reprehenderit sint nostrum vitae iure aspernatur, cupiditate fuga mollitia aliquid.",
  type: "Online Games",
  eventName: "Super SUS",
  dateTime: "March 18, 11:00 AM to 1:00 PM ",
  venue: "IT-442",
  rules: ["Solo participation.", "Players must join the given room code and compete against co-participants.","Players must join the given room code and compete against co-participants."],
  firstprize: 1000,
  secondprize: 500,
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
