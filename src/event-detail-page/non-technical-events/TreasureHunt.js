import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TreasureHuntImg from "../../assets/event-images/treasure-hunt.jpg";

const treasureHunt = {
  image: TreasureHuntImg,
  description:
    "Get ready for the ultimate Bug Bash! Form a team of three and put your collective debugging skills to the test in this exciting competition.Hunt down and fix the trickiest bugs to emerge as the top bug busters!",
  type: "Non-Technical Event",
  eventName: "Treasure Hunt",
  dateTime: "Mar 17, 2:00 PM to 4:00 PM",
  venue: "IT-442",
  rules: ["Rule 1", "Rule 2", "Rule 3", "Rule 4"],
  firstprize: 1000,
  secondprize: 500,
  contact: [
    {
      name: "name1",
      phoneNo: "7871605729",
    },
    {
      name: "name2",
      phoneNo: "6374522560",
    },
    {
      name: "name3",
      phoneNo: "8825427528",
    },
  ],
};

const TreasureHunt = () => {
  return <SingleEventPage eventDetails={treasureHunt} />;
};

export default TreasureHunt;
