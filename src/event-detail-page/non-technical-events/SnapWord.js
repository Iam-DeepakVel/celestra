import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Snapword from "../../assets/event-images/snapword.jpg";

const snapWord = {
  image: Snapword,
  description:"Join us for a visual puzzle adventure! Can you spot the hidden word that ties together four seemingly unrelated pictures? Test your skills and have some fun at our picture-perfect event!",
  type: "Non-Technical Event",
  eventName: "Snap Word",
  dateTime: "Mar 18, 11:00AM - 12:00PM",
  venue: "IT-443",
  rules: ["2 members per team","Mobile phone with internet connectivity required","Arguments will not be appreciated.", "Decision of event organizers will be final.","At each round,the participants will be eliminated until there is only one winner at the end"],
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Kishor kumar K",
      phoneNo: "6374737240",
    },
    {
      name: "Nithin R",
      phoneNo: "9524649561",
    },
    {
      name: "Vigneshkumar S",
      phoneNo: "8667683941",
    },
  ],
};

const SnapWord = () => {
  return <SingleEventPage eventDetails={snapWord}/>;
};

export default SnapWord;
