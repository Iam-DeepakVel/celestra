import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "DevOps is the combination of cultural philosophies, practices, and tools that increases an organisation’s ability to deliver applications and services at high velocity.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "March 18, 11:00AM - 1:00PM ",
  venue: "IT-442",
  rules: [
    "DevOps is the combination of cultural philosophies, practices, and tools that increases an organisation’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organisations using traditional software development and infrastructure management processes.",
    "DevOps is a system that helps organisations work more efficiently together to meet these demands.",
    "DevOps Offers a Definite Career Path that Promises Steady Growth.In this workshop you will be walked through with a hands on experience with our expert associates from Accenture.",
  ],
  contact: [
    {
      name: "Madhu siddharth",
      phoneNo: "9150223416",
    },
    {
      name: "Karthick",
      phoneNo: "7010567021",
    },
    {
      name: "Rahul",
      phoneNo: "9080714151",
    },
    {
      name: "Kiruthik Kumar",
      phoneNo: "9629867451",
    },
  ],
};

const Workshop = () => {
  return (
    <SingleEventPage eventDetails={workshop} noPrize={true} isDetails={true} />
  );
};

export default Workshop;
