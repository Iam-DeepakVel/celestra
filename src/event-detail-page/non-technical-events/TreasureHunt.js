import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TreasureHuntImg from "../../assets/event-images/treasure-hunt.jpg";

const treasureHunt = {
  image: TreasureHuntImg,
  description: "Description",
  type: "Non-Technical Event",
  eventName: "Treasure Hunt",
  dateTime: "Mar 17, 2:00PM - 4:00PM",
  venue: "IT-442",
  rules: ["Rule 1", "Rule 2", "Rule 3", "Rule 4"],
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Fateen",
      phoneNo: "9626996595",
    },
    {
      name: "Tilak Chandar",
      phoneNo: "7010056926",
    },
    {
      name: "Hari Haran",
      phoneNo: "8056735359",
    },
  ],
};

const TreasureHunt = () => {
  return <SingleEventPage eventDetails={treasureHunt} />;
};

export default TreasureHunt;
