import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BombsquadImg from "../../assets/games-images/online/bombsquad1.jpg";

const bombsquard = {
  image:  BombsquadImg,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam deleniti consequuntur esse error libero omnis voluptatibus saepe facere cumque reprehenderit sint nostrum vitae iure aspernatur, cupiditate fuga mollitia aliquid.",
  type: "Online Games",
  eventName: "Bomb Squad",
  dateTime: "Need Upadate da kapila ",
  venue: "IT-442",
  rules: ["1-2 members per team.","Maps will be chosen be the event organizer.","Player who stays till the last wind."],
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

const BombSquad = () => {
  return <SingleEventPage eventDetails={bombsquard} />;
};

export default BombSquad;
