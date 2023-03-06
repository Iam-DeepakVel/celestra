import { Helmet } from "react-helmet";
import EventCard from "../../common/EventCard";
import { onlineGames } from "../../constants/games-summary";
import GamesWrapper from "./GamesWrapper";
import { motion } from "framer-motion";

export default function OnlineGames() {
  return (
    <GamesWrapper isOnline={true}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CELESTRA | Online Games</title>
      </Helmet>
      <div className="celestraHeroFont text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-3xl font-bold tracking-wider text-white sm:text-4xl"
        >
          <span className="text-5xl text-red-600">O</span>nline{" "}
          <span className="text-5xl text-red-600">G</span>ames
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-2 text-lg leading-8 text-white tracking-wider"
        >
          The game is the canvas, let's paint our masterpiece
        </motion.p>
      </div>

      {/* Games Card Container */}
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr px-8 grid-cols-1 gap-12  sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {onlineGames?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </GamesWrapper>
  );
}
