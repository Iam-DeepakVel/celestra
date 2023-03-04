import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import MoviequizImg from "../../assets/event-images/moviequiz.jpg";

const movieQuiz = {
  image: MoviequizImg,
  description: "Find the movie by what you choose",
  type: "Non Technical Event",
  eventName: "Movie Quiz",
  dateTime: "March 17, 1:00 PM",
  venue: "IT-212",
  rules: [
    "Each team will consist of three members.",
    "You will toss a coin to determine whether you will use connecting images or acting to convey the name of the movie.",
    "If connecting images are chosen, a set of images related to the movie will be projected on the screen. If acting is chosen, the team will have to act out the name of the movie.",
    "The winners will be determined by the team that correctly guesses the highest number of movies.",
  ],
  firstprize: 1000,
  secondprize: 750,
  contact: [
    {
      name: "Darun sanjay",
      phoneNo: "6383290077",
    },
    {
      name: "Dhanush",
      phoneNo: "93618 88341",
    },
    {
      name: "Harshavardhan ",
      phoneNo: "88252 52599",
    },
  ],
};

const MovieQuiz = () => {
  return <SingleEventPage eventDetails={movieQuiz} />;
};

export default MovieQuiz;
