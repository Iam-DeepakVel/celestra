import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BombsquadImg from "../../assets/games-images/online/bombsquad1.jpg";

const bombsquard = {
  image: BombsquadImg,
  description:
    "The Bomb Squad is a highly trained and specialized unit that deals with the most dangerous and explosive situations imaginable. These brave men and women put their lives on the line every day to protect the public from the threat of bombs and other explosive devices.",
  type: "Online Games",
  eventName: "Bomb Squad",
  dateTime: "March 17, 2:30PM - 3:30PM",
  venue: "IT-442",
  rules: [
    "1-2 members per team.",
    "Maps will be chosen be the event organizer.",
    "Player who stays till the last wind.",
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
      name: "Aswin",
      phoneNo: "8754799651",
    },
  ],
};

const BombSquad = () => {
  return (
    <SingleEventPage
      eventDetails={bombsquard}
      formsLink={
        "https://docs.google.com/forms/d/e/1FAIpQLSfm5H9WDFME54WUn0yvyuRy6ZZt4vRfp9FqpLWMmsqjIP8yWg/viewform?usp=sf_link"
      }
     
    />
  );
};

export default BombSquad;
