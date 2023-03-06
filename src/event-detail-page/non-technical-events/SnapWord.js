import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Snapword from "../../assets/event-images/snapword.jpg";

const snapWord = {
  image: Snapword,
  description:
    "Snap Word is a language magician, able to conjure up words and phrases with lightning speed and unparalleled accuracy. With a snap of their fingers, Snap Word can turn a blank page into a masterpiece of prose, leaving their audience awestruck.",
  type: "Non-Technical Event",
  eventName: "Snap Word",
  dateTime: "March 18, 11:00 AM to 12:00 PM",
  venue: "IT-206",
  rules: ["2 members per team","Mobile phone with internet connectivity required","Arguments will not be appreciated.", "Decision of event organizers will be final.","At each round,the participants will be eliminated until there is only one winner at the end "],
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
  return <SingleEventPage eventDetails={snapWord} />;
};

export default SnapWord;
