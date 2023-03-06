import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import StumbleguysImg from "../../assets/games-images/online/stumble-guys.jpg";

const stumbleguys = {
  image: StumbleguysImg,
  description:
    "Stumble Guys is a thrilling multiplayer game with quirky characters navigating challenging obstacle courses filled with traps and twists. With fast-paced gameplay and unpredictable challenges, it's a test of skill and agility against players from around the world.",
  type: "Online Games",
  eventName: "Stumble Guys",
  dateTime: "Need Upadate da kapila ",
  venue: "IT-442",
  rules: ["Solo Participation.", "They will play online  along with one host (just to spectate).","Participant with highest position wins."],
  firstprize: 400,
  secondprize: 200,
  thirdprize: 100,
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
