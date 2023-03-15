import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TechnicalQuizImg from "../../assets/event-images/technical-quiz.jpg";

const technicalQuiz = {
  image: TechnicalQuizImg,
  description:
    "Get ready to test your knowledge and sharpen your skills in the ultimate battle of the brains! The technical quiz at our symposium is not your average quiz - it's a high-octane, adrenaline-fueled showdown that will put your expertise to the test.With questions ranging from cutting-edge technology to the latest industry trends, this quiz will challenge even the most seasoned professionals.",
  type: "Technical Event",
  eventName: "Technical Quiz",
  dateTime: "Mar 17, 2:00PM - 3:00PM",
  venue: "IT-443",
  rules: [
    "Minimum of 2 members per team",
    "Team name must be decided",
    "Use of Internet is prohibited",
    "3 rounds will be held, [1st Round : 25 Questions, 25 minutes], [2nd Round : 10 Questions, 15 minutes], [3rd Round : 10 Questions, 20 minutes]",
    "Pen-Paper Test",
  ],

  firstprize: 800,
  secondprize: 500,
  thirdprize: 0,
  contact: [
    {
      name: "Nithin",
      phoneNo: "9524649561",
    },
    {
      name: "Harresh Raam P.S",
      phoneNo: "9566326060",
    },
    {
      name: "Abdul Manan Bhat",
      phoneNo: "9906725403",
    },
  ],
};

const TechnicalQuiz = () => {
  return <SingleEventPage eventDetails={technicalQuiz} />;
};

export default TechnicalQuiz;
