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
    "Maximum team size: 3.",
    "The paper needs to be in the format of a standard IEEE paper. ",
    "The abstract of the paper submitted must not exceed the limit of 250 words by any chance.",
    "Your paper should be original work, meaning that it has not been previously published or submitted to any other competitions or conferences. ",
    "You are free to choose the topic for your paper. We recommend focusing on one specific topic to make your presentation more effective.",
    "To participate, please email your abstract to <itcelestra2k23@gmail.com>. Our panel of judges will evaluate the submissions and select the top candidates to present their papers on the day of the event. If your paper is shortlisted, you will be asked to provide a soft copy of your paper and PowerPoint presentation. Please ensure that you have both of these ready in advance.",
    "Each team will have 10 minutes to present their paper, followed by a question and answer session.",
    "Teams can be composed of individuals from different institutions. However, participants may not be a part of multiple teams for the same event.",
    "If you encounter any difficulties, please contact the incharges.",
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
