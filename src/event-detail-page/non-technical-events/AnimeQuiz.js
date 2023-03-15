import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import AnimeQuizImg from "../../assets/event-images/animequiz.jpg";

const animeQuiz = {
  image: AnimeQuizImg,
  description:
    "Are you ready for the ultimate anime showdown? Round one of our Anime Quiz event will test your knowledge with 20 challenging questions. Write down your answers on the provided sheet and prove you're a true otaku!But that's just the warm-up. The real test begins in round two, our lightning round! Only six teams will be selected to face off in this buzzer round, where quick reflexes and lightning-fast recall are essential. Will your team be one of the lucky few to compete for glory and the title of ultimate anime fan? Don't miss your chance to shine in our Anime Quiz!",
  type: "Non Technical Event",
  eventName: "Anime Quiz",
  dateTime: "Mar 17, 11:30AM - 12:30PM",
  venue: "IT-444",
  rules: [
    "Each team should consist of Two members. No additional team members will be allowed once the quiz has started.",
    "During round one, each team will have a fixed amount of time to answer each question. No additional time will be given.",
    "In round two, only the team that has hit the buzzer first will be allowed to answer the question. If the answer is incorrect, the next team with the correct answer will have a chance to score.",
    "The quiz master's decision is final and cannot be challenged by any of the teams. Any team found violating the rules may be disqualified from the quiz.",
  ],
 
  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Tilak Chander S",
      phoneNo: "7010056926",
    },
    {
      name: "Arun Kumar V",
      phoneNo: "8098284161",
    },
    {
      name: "Fateen",
      phoneNo: "9626996595",
    },
    {
      name: "Achari Magesh",
      phoneNo: "9894630749",
    },
  ],
};

const AnimeQuiz = () => {
  return <SingleEventPage eventDetails={animeQuiz} />;
};

export default AnimeQuiz;
