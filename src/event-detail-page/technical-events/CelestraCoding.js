import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import celestraCodingImg from "../../assets/event-images/celestra-coding.jpg";

const celestraCoding = {
  image: celestraCodingImg,
  description:
    "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
  type: "Technical",
  eventName: "Celestra Coding",
  dateTime: "Mar 17, 9:00AM - 11:30AM",
  venue: "IT-442",
  rules: [
    "Solo Participation",
    "The logic can be implemented in any languages.",
    "Participants may bring their own laptops.",
    "Plagiarism leads to direct disqualification",
  ],
  firstprize: 1500,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Khabilan S",
      phoneNo: "6382889722",
    },
    {
      name: "Achari Magesh",
      phoneNo: "9894630749",
    },
    {
      name: "Narendaran",
      phoneNo: "6369616115",
    },
  ],
};

const CelestraCoding = () => {
  return <SingleEventPage eventDetails={celestraCoding}  />;
};

export default CelestraCoding;
