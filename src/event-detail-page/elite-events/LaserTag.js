import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import LaserTagImg from "../../assets/event-images/lasertag4.jpg";

const laserTag = {
  image: LaserTagImg,
  description:
    "Action is the foundational key to success--Pablo Picasso. Elevate your ideas and let you ideas fly high along with your presentation.",
  type: "Elite Event",
  eventName: "Laser Tag",
  dateTime: "March 17, 9:00 AM to 5:00 PM",
  venue: "IT-207",
  rules: ["Team can have maximum of 3 members.", "Spot registration only."],
  firstprize: 0,
  secondprize: 0,
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
      name: "Arvind Srinivas K G",
      phoneNo: "7871605729",
    },
  ],
};

const LaserTag = () => {
  return (
    <SingleEventPage
      eventDetails={laserTag}
      noPrize={true}
      spotRegistration={true}
    />
  );
};

export default LaserTag;
