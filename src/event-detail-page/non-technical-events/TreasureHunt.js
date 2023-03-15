import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TreasureHuntImg from "../../assets/event-images/treasure-hunt.jpg";

const treasureHunt = {
  image: TreasureHuntImg,
  description:
    "Are you ready for the ultimate adventure of a lifetime? Join us on an exhilarating treasure hunt where hidden riches and thrilling clues await! Uncover the mystery and follow the trail to claim your treasure trove before time runs out. Get your adrenaline pumping and embark on a journey like no other",
  type: "Non-Technical Event",
  eventName: "Treasure Hunt",
  dateTime: "Mar 17, 2:00PM - 4:00PM",
  venue: "IT-206",
  rules: [
    "Each team must consist of two members.",
    "Each team kicks off with a distinctive clue, but they're all headed to the same spot.",
    "The first two teams to crack the codes and reach the endpoint will claim victory and bragging rights",
    "Feel free to use your smartphones during the event.",
  ],
 
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Rishi",
      phoneNo: "7904097972",
    },
    {
      name: "Adithya",
      phoneNo: "9080153329",
    },
    {
      name: "Vijay",
      phoneNo: "8248238817",
    },
  ],
};

const TreasureHunt = () => {
  return <SingleEventPage eventDetails={treasureHunt}  />;
};

export default TreasureHunt;
