import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Reversecoding from "../../assets/event-images/reversecoding.jpg";

const reverseCoding = {
  image: Reversecoding,
  description:
    "Think you have what it takes to reverse engineer the code? Join us for a Reverse Coding event where you'll need to decipher the logic behind the program and recreate it from scratch!",
  type: "Technical Event",
  eventName: "Reverse Coding",
  dateTime: "March 17, 3:00PM - 4:30PM",
  venue: "IT-443",
  rules: [
    "Solo Participation",
    "Analyzing the input and output is necessary to determine the logic",
    "The time given to solve the problem is 90 minutes",
    "The code can be written in any programming language",
    "Participants should bring their own laptops for the event",
    "Any form of academic dishonesty, including plagiarism and cheating, is not permitted.",
    "One who solve more test cases in given amount of time is declared as winner",
  ],

  firstprize: 1000,
  secondprize: 500,
  thirdprize:0,
  contact: [
    {
      name: "Kishor kumar K",
      phoneNo: "6374737240",
    },
    {
      name: "Khabilan S",
      phoneNo: "6382889722",
    },
    {
      name: "Arun Kumar S",
      phoneNo: "80727 67338",
    },
  ],
};

const ReverseCoding = () => {
  return <SingleEventPage eventDetails={reverseCoding} />;
};

export default ReverseCoding;
