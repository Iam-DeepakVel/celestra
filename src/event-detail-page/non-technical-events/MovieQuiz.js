import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import MoviequizImg from "../../assets/event-images/moviequiz.jpg";

const movieQuiz = {
  image: MoviequizImg,
  description: "Get ready to put your movie knowledge to the test with our exciting movie quiz event! With thrilling rounds and intense competition, this event is sure to capture the hearts of movie buffs everywhere.",
  type: "Non Technical Event",
  eventName: "Movie Quiz",
  dateTime: "March 18, 3:00PM - 4:00PM",
  venue: "IT-444",
  rules: [
    "Each team will consist of three members.",
    "You will toss a coin to determine whether you will use connecting images or acting to convey the name of the movie.",
    "If connecting images are chosen, a set of images related to the movie will be projected on the screen. If acting is chosen, the team will have to act out the name of the movie.",
    "The winners will be determined by the team that correctly guesses the highest number of movies.",
  ],

  firstprize: 300,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Vikram",
      phoneNo: "9025219606",
    },
    {
      name: "Dhanush",
      phoneNo: "93618 88341",
    },
    {
      name: "Sakthivel",
      phoneNo: "9789745855",
    },
  ],
};

const MovieQuiz = () => {
  return <SingleEventPage eventDetails={movieQuiz}  />;
};

export default MovieQuiz;
