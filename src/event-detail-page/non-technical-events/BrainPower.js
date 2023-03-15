import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Brainpower from "../../assets/event-images/brainpower.jpg";

const brainPower = {
  image: Brainpower,
  description:
    "A list of images or a set of images will be projected in the screen and will be flashed for 10 seconds. The person who writes maximum correct answers will be held for the next round",
  type: "Non Technical Event",
  eventName: "Brain Power",
  dateTime: "March 18, 12:00PM - 1:00PM",
  venue: "IT-206",
  rules: [
    "individual",
    "A pen and a paper is enough",
    "Arguments will not be appreciated.",
    "Decision of event organizers will be final.",
    "At each round,the participants will be eliminated until there is only one winner at the end ",
  ],

  firstprize: 300,
  secondprize: 200,
  thirdprize:0,
  contact: [
    {
      name: "Haresh V",
      phoneNo: "7223822003",
    },
    {
      name: "Dhanush P V",
      phoneNo: "9361888341",
    },
    {
      name: "Karthikeyan",
      phoneNo: "8838329008",
    },
  ],
};
const BrainPower = () => {
  return <SingleEventPage eventDetails={brainPower} />;
};

export default BrainPower;
