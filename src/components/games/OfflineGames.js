import { Helmet } from "react-helmet";
import { offlineGames } from "../../constants/games-summary";
import GamesWrapper from "./GamesWrapper";
import { motion } from "framer-motion";
import { BiErrorAlt } from "react-icons/bi";

export default function OfflineGames() {
  return (
    <GamesWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CELESTRA | Offline Games</title>
      </Helmet>
      <div className="celestraHeroFont text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-3xl font-bold tracking-wider text-white sm:text-4xl"
        >
          <span className="text-5xl text-red-600">O</span>ffline{" "}
          <span className="text-5xl text-red-600">G</span>ames
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-2 text-lg leading-8 text-white tracking-wider"
        >
          The beauty of offline games is that they never need an internet
          connection
        </motion.p>
      </div>
      {/* Games Card Container */}
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr px-8 grid-cols-1 gap-12  sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {offlineGames?.map((event) => (
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            key={event.id}
            className="font-poppins shadow-md shadow-red-600 relative isolate flex flex-col gap-2 justify-end overflow-hidden rounded-2xl h-[350px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover hover:scale-50"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/80" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/40" />
            <h3 className="mt-3 text-2xl tracking-widest mb-3 celestraHeroFont font-semibold leading-6 text-white">
              <p>{event.title}</p>
            </h3>
            <p className="text-white mb-4">{event.description}</p>
            {event.isOnlineRegister && (
              <a
                target="_blank"
                rel="noreferrer"
                href={event.href}
                className="bg-[#111111] celestraHeroFont text-xl text-white text-center rounded-md p-4   hover:bg-red-500 hover:text-black tracking-widest transition-all duration-300 ease-in-out"
              >
                Register Now
              </a>
            )}
            {event.commingSoon && (
              <div class="flex items-center justify-center gap-4 font-medium celestraHeroFont text-red-600">
                <p className="text-lg tracking-wider text-center">
                  Registration Opens soon!!
                </p>
              </div>
            )}
            {(!event.commingSoon && !event.isOnlineRegister) && (
              <div class="flex items-center justify-center gap-4 font-medium celestraHeroFont text-red-600">
                <BiErrorAlt size={15} color="red" />
                <p className="text-lg tracking-wider text-center">
                  Spot Registration!
                </p>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </GamesWrapper>
  );
}
