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
  venue: "IT-442",
  rules: [
    "Individual or team (Maximum 2 members)",
    "Use of Internet is prohibited",
    "1 round will be held, [1st Round : 50 Questions, 90 minutes]",
    "Feel free to bring your own laptops"
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
