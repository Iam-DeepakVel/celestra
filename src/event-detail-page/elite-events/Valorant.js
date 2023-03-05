import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ValorantImg from "../../assets/event-images/valorant2.jpg";

const valorant = {
  image: ValorantImg,
  description:
    "Step into the near-future world of Valorant and experience heart-pumping action and intense strategy with your team. Choose your unique agent with special abilities and compete in a tactical shooter game that will test your skills and leave you wanting more",
  type: "Elite Event",
  eventName: "Valorant",
  dateTime: "March 17, 9:00AM",
  venue: "IT-201",
  rules: [
    "A team must contain minimum of 5 members.",
    "Treat others how you wish to be treated, so be kind and courteous. Respect everyone regardless of gender, ethics and age.",
    "No inappropriate usernames/nicknames. (Admin reserves the right to adjust server nicknames at its sole discretion, and to ultimately decide whether to approve a nickname request).",
    "Verbal abuse in all chat will not be tolerated , proofs for it might get you banned from this tournament.",
    "If any of the teammate is using ghost mode the entire team will be banned from the tournament.",
    "Play on your own network, play at own risk",
    "It is forbidden to cheat, modify the game files, exploit bugs, and/or use any third-party application which would give an unfair advantage against other users.",
    "All cheats are completely forbidden to use under any circumstance while playing the tournament Using any cheat will result in bans and disqualifications. This includes, but are not limited to:ESP,Radar hacks,Wallhacks,Speed hacks,Aim hacks,Hitbox manipulation,Teleportation(any kind of teleportation, which is not possible in the game).",
    "The usage of a bug/bugs to gain an advantage versus your opponents.",
    "If any 1 of the teammate does have any of the rule being voilated then the entire team will be banned.",
  ],
  firstprize: 500,
  secondprize: 300,
  contact: [
    {
      name: "name1",
      phoneNo: "9080714151",
    },
    {
      name: "name2",
      phoneNo: "9150223416",
    },
    {
      name: "name3",
      phoneNo: "7299067698",
    },
  ],
};

const Valorant = () => {
  return <SingleEventPage eventDetails={valorant} />;
};

export default Valorant;
