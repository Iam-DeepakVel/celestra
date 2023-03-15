import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PaperPresentationImg from "../../assets/event-images/paperpresentation.jpg";

const paperPresentation = {
  image: PaperPresentationImg,
  description:
    "Action is the foundational key to success--Pablo Picasso. Elevate your ideas and let you ideas fly high along with your presentation.",
  type: "Elite Event",
  eventName: "Paper presentation",
  dateTime: "March 18, 9:00AM - 11:00AM",
  venue: "IT-206",
  rules: [
    "The maximum team size allowed is four members.",
    "Your paper abstract must not exceed 250 words.",
    "Your paper should be original.",
    "You are free to choose your paper topic(related to Information Technology), but we recommend focusing on one specific area for a more effective presentation.",
    "Each team will have a 10-minute presentation slot, followed by a Q&A session.",
    "Teams can be composed of individuals from different institutions.",
    "Participants can participate in two different teams, but they must register separately.",
    "Participants may present multiple topics, but they must register each one separately.",
    "If you encounter any difficulties, please contact the designated person in charge.",
  ],

  firstprize: 2000,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Khabilan S",
      phoneNo: "6382889722",
    },
    {
      name: "Tilak Chander S",
      phoneNo: "7010056926",
    },
    {
      name: "Achari Magesh",
      phoneNo: "9894630749",
    },
  ],
};

const PaperPresentation = () => {
  return (
    <SingleEventPage
      eventDetails={paperPresentation}
      formsLink={
        "https://docs.google.com/forms/d/e/1FAIpQLSf11z7ci1xR8gMC1begGNfhfG3NeH7VBbrFuUe2s0MugQsAsQ/viewform?usp=sf_link"
      }
     
    />
  );
};

export default PaperPresentation;
