import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ValorantImg from "../../assets/event-images/valorant2.jpg";

const valorant = {
  image: ValorantImg,
  description:
    "Are you ready to experience the rush of adrenaline and the thrill of the game? Join the Valorant event now!",
  type: "Elite Event",
  eventName: "Valorant",
  dateTime: "March 17, 9:00AM",
  venue: "IT-201",
  rules: [
    "In the first round, teams will have just 10 seconds to answer tricky questions, with the pressure mounting as the timer ticks down.",
    "Only the sharpest minds will make it to round two, where teams will choose their own topics and face off in a battle of knowledge supremacy.",
    "In round three where the real action happens, as teams go head-to-head in a nail-biting showdown, with only one team emerging victorious.",
    "No mobile phones allowed",
    "No malpractice if found will be disqualified ",
    "No discussion among another team allowed during the game",
  ],
  firstprize: 500,
  secondprize: 300,
  contact: [
    {
      name: "name1",
      phoneNo: "9080714151",
    },
    {
      name: "name2",
      phoneNo: "9150223416",
    },
    {
      name: "name3",
      phoneNo: "7299067698",
    },
  ],
};

const Valorant = () => {
  return <SingleEventPage eventDetails={valorant} />;
};

export default Valorant;
