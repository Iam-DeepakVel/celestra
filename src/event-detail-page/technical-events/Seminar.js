import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import SeminarImg from "../../assets/event-images/seminar.jpg";

const seminar = {
  image: SeminarImg,
  description:
    "In reality every industry is bound to be automated.There is already software that can efficiently perform the analysis. Artificial intelligence and Machine learning are bound to take the place of human beings in this field too.",
  type: "Technical Event",
  eventName: "Seminar",
  dateTime: "Mar 17, 11:30AM - 1:30PM",
  venue: "IT-443",
  rules: [
    "Artificial intelligence and data science are the well known growing fields on computer science.",
    "In reality every industry is bound to be automated.There is already software that can efficiently perform the analysis. Artificial intelligence and Machine learning are bound to take the place of human beings in this field too.",
    "AI is the implementation of a predictive model to foresee events. Data science is an umbrella term for statistical techniques, design techniques, and development methods.",
    "Today almost all the major industries use data science to improve the efficiency of their operations and make smarter decisions based on predictive models for the future.",
    "In this seminar you will be walked through the industrial trends in Data Science and Artificial intelligence with our expect associates from Robert Bosch",
  ],

  contact: [
    {
      name: "Karthick",
      phoneNo: "7010567021",
    },
    {
      name: "Rahul",
      phoneNo: "9080714151",
    },
    {
      name: "Aswin",
      phoneNo: "8754799651",
    },
    {
      name: "Madhu Siddharth",
      phoneNo: "9150223416",
    },
  ],
};

const Seminar = () => {
  return (
    <SingleEventPage eventDetails={seminar} noPrize={true} isDetails={true}  />
  );
};

export default Seminar;
