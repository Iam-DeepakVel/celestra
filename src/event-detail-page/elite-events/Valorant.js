import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ValorantImg from "../../assets/event-images/valorant2.jpg";

const valorant = {
  image: ValorantImg,
  description:
    "Step into the near-future world of Valorant and experience heart-pumping action and intense strategy with your team. Choose your unique agent with special abilities and compete in a tactical shooter game that will test your skills and leave you wanting more",
  type: "Elite Event",
  eventName: "Valorant",
  dateTime: "Mar 18, 6PM-9PM",
  venue: "Online",
  rules: [
    "Teams must consist of 5 players and 2 substitutes.",
    "Substitutes can only be included at the start of a new match and the moderator must be informed.",
    "Players must be available in the lobby at least 15 minutes before the scheduled match time.",
    "All team members must have reliable communication, such as a Discord server.",
    "Failure of the entire team to show up on time will result in forfeiting the match.",
    "The team captain must add all members and the coordinator (details will be given) as friends with their RIOT IDs.",
    "Captains are responsible for adding their teammates to the game lobby well in advance of the match.",
    "Cheating, including exploiting bugs, will not be tolerated and will disqualify the entire team from the event.",
    "Team captains will be informed of any changes in match schedules.",
    "The organizer will communicate match fixtures, tournament schedules, and updates through the Discord group.",
    "If a team fails to show up, their opponents will receive a walkover.",
  ],
  firstprize: 2000,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Rishi Ragavendar",
      phoneNo: "7904097972",
    },
    {
      name: "Fateen",
      phoneNo: "9626996595",
    },
    {
      name: "Tilak Chander S",
      phoneNo: "7010056926",
    },
  ],
};

export const Valorant = (discordlink) => {
  return (
    <div>
      <SingleEventPage
        eventDetails={valorant}
        formsLink={
          "https://docs.google.com/forms/d/e/1FAIpQLSfoRM_a4d7ILZJljMtjxexxikehMd5bRuRXyAILx-f3U-Jl0Q/viewform?usp=sf_link"
        }
        noVenue={true}
        discordlink={true}
      />
    </div>
  );
};

export default Valorant;
