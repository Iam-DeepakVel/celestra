import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam deleniti consequuntur esse error libero omnis voluptatibus saepe facere cumque reprehenderit sint nostrum vitae iure aspernatur, cupiditate fuga mollitia aliquid.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "March 18, 11:00 AM to 1:00 PM ",
  venue: "IT-442",
  rules: ["Rule 1", "Rule 2"],
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
