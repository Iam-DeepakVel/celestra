import { motion } from "framer-motion";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
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
      {event.isRegistrationClosed ? (
        <div class="flex items-center justify-center gap-4 font-medium celestraHeroFont text-red-600">
          <BiErrorAlt size={15} color="red" />
          <p className="text-lg tracking-wider text-center">
            Registration Closed!!
          </p>
        </div>
      ) : (
        <Link
          to={event.href}
          className="bg-[#111111] celestraHeroFont text-xl text-white text-center rounded-md p-4   hover:bg-red-500 hover:text-black tracking-widest transition-all duration-300 ease-in-out"
        >
          Quicklook
        </Link>
      )}
    </motion.article>
  );
};

export default EventCard;
