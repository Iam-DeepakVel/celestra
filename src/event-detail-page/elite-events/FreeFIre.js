import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import FreeFireImg from "../../assets/event-images/freefire.jpg";

const freeFire = {
  image: FreeFireImg,
  description:
    "Step into the near-future world of FreeFire and experience heart-pumping action and intense strategy with your team. Choose your unique agent with special abilities and compete in a tactical shooter game that will test your skills and leave you wanting more",
  type: "Elite Event",
  eventName: "Free Fire",
  dateTime: "Mar 17 & 18, 6PM-9PM",
  venue: "Online",
  rules: [
    "A team must contain minimum of 4 members",
    "Based on number of teams BR Ranked match will be conducted and The winner of those two ranked matches have to play 1 vs 1 clash squad. Winner and Runner will be decided by the clash squad match.",
    "Treat others how you wish to be treated, so be kind and courteous. Respect everyone regardless of gender, ethics and age.",
    "No inappropriate usernames/nicknames.",
    "No team up. Using emotes in final clash squad match is not fair.",
    "verbal abuse in all chat will not be tolerated , proofs for it might get you banned from this tournament.",
    "It is forbidden to cheat, modify the game files, exploit bugs, and/or use any third-party application which would give an unfair advantage against other users.",
    "Cheating, including exploiting bugs and using hacks, will not be tolerated and will disqualify the entire team from the event.",
    "Team captains will be informed of any changes in match schedules.",
    "If any 1 of the teammate does have any of the rule being voilated then the entire team will be banned.",
  ],

  firstprize: 700,
  secondprize: 300,
  thirdprize: 0,
  contact: [
    {
      name: "Ashwin",
      phoneNo: "8754799651",
    },
    {
      name: "Senthil",
      phoneNo: "80980 86722",
    },
    {
      name: "Jeevanand",
      phoneNo: "9944927339",
    },
  ],
};

const FreeFire = () => {
  return (
    <SingleEventPage
      eventDetails={freeFire}
      formsLink={
        "https://docs.google.com/forms/d/e/1FAIpQLSdsSbB-GqMdraOTD9ShynxyweZu2gVASyPwvpf1T-Tp_fV9sA/viewform?usp=sf_link"
      }
      noVenue={true} 
    />
  );
};

export default FreeFire;
