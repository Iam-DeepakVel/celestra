import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WebMastersImg from "../../assets/event-images/web-masters.jpg";

const webMasters = {
  image: WebMastersImg,
  description:
    "Do you have a passion for web design? The Web Masters Event is your chance to shine! Create a website using HTML and CSS (optional JS) based on a sample design and features.",
  type: "Web Masters",
  eventName: "Web Masters",
  dateTime: "Mar 18, 2:00PM - 4:00PM",
  venue: "IT-442",
  rules: [
    "Participants will be provided with a webpage design and a list of required assets.",
    "Participants have to recreate the design within a given time",
    "Participants will only be allowed to use HTML and CSS for their designs. They can optionally use JavaScript, but it will not be a requirement for the event.",
    "Marks will be allotted based on responsiveness and optimal code. The responsiveness score will be based on how well the design works on both desktop and mobile devices. The optimal code score will be based on how well the code is organized, efficient, and follows best practices.",
  ],

  firstprize: 900,
  secondprize: 600,
  thirdprize: 0,
  contact: [
    {
      name: "Deepak V",
      phoneNo: "7397706858",
    },
    {
      name: "Guna P",
      phoneNo: "7708647325",
    },
    {
      name: "Kavi Kumar C",
      phoneNo: "8838363360",
    },
  ],
};

const WebMasters = () => {
  return <SingleEventPage eventDetails={webMasters}  />;
};

export default WebMasters;
