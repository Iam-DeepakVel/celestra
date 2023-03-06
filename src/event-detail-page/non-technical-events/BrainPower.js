import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Brainpower from "../../assets/event-images/brainpower.jpg";

const brainPower = {
  image: Brainpower,
  description:
    "Brain Power is an unstoppable force of intellect and ingenuity. With an incredible capacity for learning and problem-solving, Brain Power is always one step ahead of the game.Whether it's cracking a complex code or deciphering a difficult puzzle, Brain Power approaches every challenge with confidence and precision..",
  type: "Non-Technical Event",
  eventName: "Brain Power",
  dateTime: "March 18, 12:00 PM to 1:00 PM",
  venue: "IT-206",
  rules: [
    "Not updated",
    "Not updated",
  ],
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "name",
      phoneNo: "89852526",
    },
    {
      name: "name",
      phoneNo: "89852526",
    },
    {
      name: "name",
      phoneNo: "89852526",
    },
    
  ],
};

const BrainPower= () => {
  return <SingleEventPage eventDetails={brainPower} />;
};

export default BrainPower;
