import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import StumbleguysImg from "../../assets/games-images/online/stumble-guys.jpg";

const stumbleguys = {
  image: StumbleguysImg,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam deleniti consequuntur esse error libero omnis voluptatibus saepe facere cumque reprehenderit sint nostrum vitae iure aspernatur, cupiditate fuga mollitia aliquid.",
  type: "Online Games",
  eventName: "Stumble Guys",
  dateTime: "Need Upadate da kapila ",
  venue: "IT-442",
  rules: ["Solo Participation.", "They will play online  along with one host (just to spectate).","Participant with highest position wins."],
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

const StumbleGuys = () => {
  return <SingleEventPage eventDetails={stumbleguys} />;
};

export default StumbleGuys;
