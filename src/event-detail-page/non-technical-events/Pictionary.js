import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PictionaryImg from "../../assets/event-images/pictionary.jpeg";

const pictionary = {
  image: PictionaryImg,
  description:
    "Guessing the picture and answer to the questions like what the picture is about. Participants are grouped into 3 members per panel. 15 images for a round(5 images for each participants). If one doesn't answered then the question will be passed to another and to another based on sequence. Participant with higher points will move to next round.",
  type: "Non-Technical Event",
  eventName: "Pictionary",
  dateTime: "March 18, 2:00 PM to 3:00 PM",
  venue: "IT-206",
  rules: [
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
      name: "Janani Tharan",
      phoneNo: "9597331367",
    },
    {
      name: "Sudharsan",
      phoneNo: "6382991170",
    },
  ],
};

const Pictionary = () => {
  return <SingleEventPage eventDetails={pictionary} />;
};

export default Pictionary;
