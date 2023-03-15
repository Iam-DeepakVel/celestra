import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "This workshop focuses on leveraging the Python programming language and the Django framework for the purpose of developing a robust backend. Participants will have the opportunity to acquire practical experience through interactive training sessions.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "March 18, 11:00AM - 1:00PM ",
  venue: "IT-444",
  rules: [
    "Python is a highly popular programming language that is widely used in backend development due to its simplicity and readability.",
    "Python has a vast collection of libraries and frameworks, such as Django, Flask, and Pyramid, which make backend development faster and more efficient.",
    "Django, the framework that this workshop is based on, provides a high-level of abstraction and follows the Model-View-Controller (MVC) architecture, which simplifies the development process and reduces the amount of code required.",
    "Gain practical knowledge of Python and Django that can be applied to real-world backend development projects.",
    "Enhance their resume with a valuable skill set that is in high demand in the job market.",
    "Participants who successfully complete the workshop will receive an e-certificate that acknowledges their completion of the program.",
  ],

  contact: [
    {
      name: "Madhu siddharth",
      phoneNo: "9150223416",
    },
    {
      name: "Karthick",
      phoneNo: "7010567021",
    },
    {
      name: "Rahul",
      phoneNo: "9080714151",
    },
    {
      name: "Kiruthik Kumar",
      phoneNo: "9629867451",
    },
  ],
};

const Workshop = () => {
  return (
    <SingleEventPage eventDetails={workshop} noPrize={true} isDetails={true} />
  );
};

export default Workshop;
