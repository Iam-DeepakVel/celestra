import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import StumbleguysImg from "../../assets/games-images/online/stumble-guys.jpg";

const stumbleguys = {
  image: StumbleguysImg,
  description:
    "Stumble Guys is a thrilling multiplayer game with quirky characters navigating challenging obstacle courses filled with traps and twists. With fast-paced gameplay and unpredictable challenges, it's a test of skill and agility against players from around the world.",
  type: "Online Games",
  eventName: "Stumble Guys",
  dateTime: "March 17, 4:00PM - 5:00PM",
  venue: "IT-442",
  rules: [
    "Solo Participation.",
    "They will play online  along with one host (just to spectate).",
    "Participant with highest position wins.",
  ],
  firstprize: 400,
  secondprize: 200,
  thirdprize: 100,
  contact: [
    {
      name: "Madhu siddharth",
      phoneNo: "9150223416",
    },
    {
      name: "Kiruthik Kumaar R",
      phoneNo: "9629867451",
    },
    {
      name: "Aswin",
      phoneNo: "8754799651",
    },
  ],
};

const StumbleGuys = () => {
  return (
    <SingleEventPage
      eventDetails={stumbleguys}
      formsLink={
        "https://docs.google.com/forms/d/e/1FAIpQLScMi2kHuBcimflCwZPN5PBRzVxKMlC0wRfXTncu-v77_29oCA/viewform?usp=sf_link"
      }
    />
  );
};

export default StumbleGuys;
