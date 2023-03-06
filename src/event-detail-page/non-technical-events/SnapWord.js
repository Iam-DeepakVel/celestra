import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Snapword from "../../assets/event-images/snapword.jpg";

const snapWord = {
  image: Snapword,
  description:
    "Guessing the picture and answer to the questions like what the picture is about. Participants are grouped into 3 members per panel. 15 images for a round(5 images for each participants). If one doesn't answered then the question will be passed to another and to another based on sequence. Participant with higher points will move to next round.",
  type: "Non-Technical Event",
  eventName: "Snap Word",
  dateTime: "March 18, 11:00 AM to 12:00 PM",
  venue: "IT-206",
  rules: [
    "Not updated",
    "Not updated",
  ],
  firstprize: 1000,
  secondprize: 500,
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

const SnapWord= () => {
  return <SingleEventPage eventDetails={snapWord} />;
};

export default SnapWord;
