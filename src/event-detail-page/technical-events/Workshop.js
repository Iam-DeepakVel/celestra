import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "DevOps is the combination of cultural philosophies, practices, and tools that increases an organisation’s ability to deliver applications and services at high velocity.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "March 18, 11:00 AM to 1:00 PM ",
  venue: "IT-442",
  rules: ["DevOps is the combination of cultural philosophies, practices, and tools that increases an organisation’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organisations using traditional software development and infrastructure management processes.","DevOps is a system that helps organisations work more efficiently together to meet these demands.", "DevOps Offers a Definite Career Path that Promises Steady Growth.In this workshop you will be walked through with a hands on experience with our expert associates from Accenture."],
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

const Workshop = () => {
  return <SingleEventPage eventDetails={workshop} noPrize={true} />;
};

export default Workshop;
