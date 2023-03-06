import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BombsquadImg from "../../assets/games-images/online/bombsquad1.jpg";

const bombsquard = {
  image:  BombsquadImg,
  description:
    "The Bomb Squad is a highly trained and specialized unit that deals with the most dangerous and explosive situations imaginable. These brave men and women put their lives on the line every day to protect the public from the threat of bombs and other explosive devices.",
  type: "Online Games",
  eventName: "Bomb Squad",
  dateTime: "Need Upadate da kapila ",
  venue: "IT-442",
  rules: ["1-2 members per team.","Maps will be chosen be the event organizer.","Player who stays till the last wind."],
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

const BombSquad = () => {
  return <SingleEventPage eventDetails={bombsquard} />;
};

export default BombSquad;
