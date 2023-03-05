import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BugBustersImg from "../../assets/event-images/bug-busters.jpg";

const bugBusters = {
  image: BugBustersImg,
  description:
    "Get ready for the ultimate Bug Bash! Form a team of three and put your collective debugging skills to the test in this exciting competition.Hunt down and fix the trickiest bugs to emerge as the top bug busters!",
  type: "Technical Event",
  eventName: "Bug Busters",
  dateTime: "March 18, 9:00 AM to 11:00 AM",
  venue: "IT-443",
  rules: [
    "Programming languages given - Python, C, C++, Java",
    "Plagiarism leads to direct disqualification",
    "Use of automated debuggers and compilers will be prohibited",
    "Strictly no Internet",
  ],
  firstprize: 1000,
  secondprize: 500,
  contact: [
    {
      name: "Arvind",
      phoneNo: "7871605729",
    },
    {
      name: "Pratheep",
      phoneNo: "6374522560",
    },
    {
      name: "Tilak",
      phoneNo: "8825427528",
    },
  ],
};

const BugBusters = () => {
  return <SingleEventPage eventDetails={bugBusters} />;
};

export default BugBusters;