import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import IdeathonImg from "../../assets/event-images/ideathon.jpg";

const ideathon = {
  image: IdeathonImg,
  description:
    "IDEATHON is competitive event, where teams or individual pitch their ideas to a panel of judges and compete recognition. The aim of the event is to inspire and empower participants to think outside the box and develop innovative solutions that can have a positive impact on society,making it an ideal platform for aspiring Entrepreneurs. ",
  type: "Elite Event",
  eventName: "IDEATHON",
  dateTime: "Mar 17, 9:00AM - 11:30AM",
  venue: "IT-206",
  rules: [
    "Each team should prepare a short pitch (PPT) to present their idea to a panel of judges and other participants. The pitch should be well-crafted, engaging, and clearly articulate the proposed solution.",
    "Participants should be organized into teams( Maximum 3 members ) or individual.",
    "A specific challenge or problem should be identified, and teams should be tasked with generating innovative solutions for addressing that challenge.",
    "Time-bound, with a specific timeframe for teams to pitch their ideas. This could range from 10 to 20 minutes , depending on the complexity of the challenge.",
    "A panel of judges will rate your project based on originality, feasibility, impact, and scalability.",
  ],
  firstprize: 1200,
  secondprize: 800,
  thirdprize: 0,
  contact: [
    {
      name: "A G Harshavardhan",
      phoneNo: "8825252599",
    },
    {
      name: "Kiruthik Kumaar R",
      phoneNo: "9629867451",
    },
    {
      name: "Sajeev",
      phoneNo: "9360275738",
    },
  ],
};

const Ideathon = () => {
  return (
    <SingleEventPage
      eventDetails={ideathon}
      thirdprize={false}
      
      formsLink={
        "https://forms.gle/Cjqv6iSrUk11dKg38"
      }
    />
  );
};

export default Ideathon;
