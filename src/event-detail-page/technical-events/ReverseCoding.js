import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Reversecoding from "../../assets/event-images/reversecoding.jpg";

const reverseCoding = {
  image: Reversecoding,
  description:
    "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
  type: "Technical",
  eventName: "Reverse Coding",
  dateTime: "Mar 17, 3:00 PM to 4:00 PM",
  venue: "IT-443",
  rules: [
    "No Update",
    "No Update",
    "No Update",
    "No Update",
  ],
  firstprize: 900,
  secondprize: 600,
  thirdprize: 0,
  contact: [
    {
      name: "name",
      phoneNo: "65321645",
    },
    {
      name: "name",
      phoneNo: "65321645",
    },
   
  ],
};

const ReverseCoding = () => {
  return <SingleEventPage eventDetails={reverseCoding} />;
};

export default ReverseCoding;
