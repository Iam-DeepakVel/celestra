import OurTeam from "./components/our-team/OurTeam";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/contact-us/ContactUs";
import Chronoline from "./components/chronoline/Chronoline";
import AllEvents from "./components/all-events/AllEvents";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";

// Technical Events
import CelestraCoding from "./event-detail-page/technical-events/CelestraCoding";
import BugBusters from "./event-detail-page/technical-events/BugBusters";
import TechnicalQuiz from "./event-detail-page/technical-events/TechnicalQuiz";
import WebMasters from "./event-detail-page/technical-events/WebMasters";
import Ideathon from "./event-detail-page/technical-events/Ideathon";
import Workshop from "./event-detail-page/technical-events/Workshop";
import Seminar from "./event-detail-page/technical-events/Seminar";

// Games
import OnlineGames from "./components/games/OnlineGames";
import OfflineGames from "./components/games/OfflineGames";

// Non Technical Events
import TreasureHunt from "./event-detail-page/non-technical-events/TreasureHunt";
import AnimeQuiz from "./event-detail-page/non-technical-events/AnimeQuiz";
import CrossFire from "./event-detail-page/non-technical-events/CrossFire";
import Pictionary from "./event-detail-page/non-technical-events/Pictionary";
import MovieQuiz from "./event-detail-page/non-technical-events/MovieQuiz";
import PaperPresentation from "./event-detail-page/elite-events/PaperPresentation";
import Valorant from "./event-detail-page/elite-events/Valorant";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import celestraLogo from "./assets/logo.png";
import { PropagateLoader } from "react-spinners";
import LaserTag from "./event-detail-page/elite-events/LaserTag";
import SnapWord from './event-detail-page/non-technical-events/SnapWord';
import BrainPower from './event-detail-page/non-technical-events/BrainPower';
import ReverseCoding from './event-detail-page/technical-events/ReverseCoding';
import StumbleGuys from "./game-detail-page/online-games/StumbleGuys";
import BombSquad from './game-detail-page/online-games/BombSquad';
import SuperSus from "./game-detail-page/online-games/SuperSus";




function App() {
  // Celestra Splash Loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col  items-center justify-center  text-center h-screen bg-black w-full ">
          <img
            src={celestraLogo}
            alt="celestra-logo"
            className="w-[65%] lg:w-[25%] mb-6 animate-pulse"
          />
          <PropagateLoader size={20} color="#d64d25" loading={loading} />
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<OurTeam />} />
              <Route path="/events" element={<AllEvents />} />
              <Route path="/chronoline" element={<Chronoline />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* Technical-Events */}
              <Route
                path="/events/celestra-coding"
                element={<CelestraCoding />}
              />
              <Route path="/events/bug-busters" element={<BugBusters />} />
              <Route
                path="/events/technical-quiz"
                element={<TechnicalQuiz />}
              />
              <Route path="/events/web-masters" element={<WebMasters />} />
              <Route path="/events/ideathon" element={<Ideathon />} />
              <Route path="/events/workshop" element={<Workshop />} />
              <Route path="/events/seminar" element={<Seminar />} />
              <Route path="/events/reversecoding" element={<ReverseCoding />} />

              {/* Non-Technical Events */}
              <Route path="/events/treasure-hunt" element={<TreasureHunt />} />
              <Route path="/events/anime-quiz" element={<AnimeQuiz />} />
              <Route path="/events/cross-fire" element={<CrossFire />} />
              <Route path="/events/pictionary" element={<Pictionary />} />
              <Route path="/events/movie-quiz" element={<MovieQuiz />} />
              <Route path="/events/snapword" element={<SnapWord />} />
              <Route path="/events/brainpower" element={<BrainPower />} />


              {/* Elite Events */}
              <Route
                path="/events/paper-presentation"
                element={<PaperPresentation />}
              />
              <Route path="/events/valorant" element={<Valorant />} />
              <Route path="/events/laser-tag" element={<LaserTag />} />

              {/*Online & Offline Games */}
              <Route path="/games/online" element={<OnlineGames />} />
              <Route path="/games/offline" element={<OfflineGames />} />
              <Route path="/games/online/stumbleguys" element={<StumbleGuys />} />
              <Route path="/games/online/bombsquad" element={<BombSquad />} />
              <Route path="/games/online/supersus" element={<SuperSus />} />

            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
