import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PictionaryImg from "../../assets/event-images/pictionary.jpeg";

const pictionary = {
  image: PictionaryImg,
  description:
    "Get ready for a fun-filled pictionary event where you can put your guessing skills to the test! With simple rules and exciting gameplay, this event is perfect for participants of all skill levels. Join us for a chance to showcase your guessing talents and win big!",
  type: "Non-Technical Event",
  eventName: "Pictionary",
  dateTime: "March 18, 2:00PM - 3:00PM",
  venue: "IT-206",
  rules: [
    "Guessing the picture and answer to the questions like what the picture is about.",
    "Participants are grouped into 3 members per panel. 15 images for a round(5 images for each participants).",
    "If one doesn't answered then the question will be passed to another and to another based on sequence.",
    "Participant with higher points will move to next round.",
    "30 seconds to answer a question",
    "Question will not be repeated more than two times",
  ],
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Thurkaraman R",
      phoneNo: "7397130548",
    },
    {
      name: "Varun",
      phoneNo: "8778071471",
    },
    {
      name: "Suresh Krishna",
      phoneNo: "9952307695",
    },
  ],
};

const Pictionary = () => {
  return <SingleEventPage eventDetails={pictionary}  />;
};

export default Pictionary;
