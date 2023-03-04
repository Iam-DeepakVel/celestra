import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WebMastersImg from "../../assets/event-images/web-masters.jpg";

const webMasters = {
  image: WebMastersImg,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam deleniti consequuntur esse error libero omnis voluptatibus saepe facere cumque reprehenderit sint nostrum vitae iure aspernatur, cupiditate fuga mollitia aliquid.",
  type: "Web Masters",
  eventName: "Web Masters",
  dateTime: "March 17, 9:00AM",
  venue: "IT-201",
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

const WebMasters = () => {
  return <SingleEventPage eventDetails={webMasters} />;
};

export default WebMasters;
