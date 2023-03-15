import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import CrossFireImg from "../../assets/event-images/crossfire.jpg";

const crossFire = {
  image: CrossFireImg,
  description:
    "Welcome to CrossFire, the ultimate battle of wits and knowledge! Join us for an electrifying three-round event that will put your team's brainpower to the test.",
  type: "Non Technical Event",
  eventName: "Cross fire",
  dateTime: "Mar 17, 3:00PM - 4:00PM",
  venue: "IT-207",
  rules: [
    "In the first round, teams will have just 10 seconds to answer tricky questions, with the pressure mounting as the timer ticks down.",
    "Only the sharpest minds will make it to round two, where teams will choose their own topics and face off in a battle of knowledge supremacy.",
    "In round three where the real action happens, as teams go head-to-head in a nail-biting showdown, with only one team emerging victorious.",
    "No mobile phones allowed",
    "No malpractice if found will be disqualified ",
    "No discussion among another team allowed during the game",
  ],

  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Madhu siddharth",
      phoneNo: "9150223416",
    },
    {
      name: "Rahul",
      phoneNo: "9080714151",
    },
    {
      name: "Karthikeyan",
      phoneNo: "8838329008",
    },
  ],
};

const CrossFire = () => {
  return <SingleEventPage eventDetails={crossFire}  />;
};

export default CrossFire;
