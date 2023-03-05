import { useState } from "react";
import EventCard from "../../common/EventCard";
import { technicalEvents } from "../../constants/allEvents-summary";
import { motion } from "framer-motion";

export default function TechnicalEvents() {
  const [date, setDate] = useState(17);
  const filteredTechnicalEvents = technicalEvents.filter(
    (event) => event.date === date
  );
  return (
    <>
      <div className="celestraHeroFont text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-3xl font-bold tracking-wider text-white sm:text-4xl"
        >
          <span className="text-5xl text-red-600">T</span>echnical{" "}
          <span className="text-5xl text-red-600">E</span>vents
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3 }}
          variants={{
            hidden: { opacity: 0, x: 120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-2 text-lg leading-8 text-white tracking-widest"
        >
          prove your obvious technical superiority
        </motion.p>
      </div>

      {/* Date Selection Section */}
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-white font-poppins mb-20 mt-6 flex gap-12  justify-center lg:gap-12 flex-wrap lg:flex-nowrap "
        >
          <motion.span
            whileTap={{ scale: 0.8 }}
            onClick={() => setDate(17)}
            className={` ${
              date === 17
                ? "bg-red-600 text-[#111111]"
                : "border  border-red-600"
            }
              px-6 py-1 flex items-center font-extrabold justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            March 17
          </motion.span>

          <motion.span
            whileTap={{ scale: 0.8 }}
            onClick={() => setDate(18)}
            className={` ${
              date === 18
                ? "bg-red-600 text-[#111111]"
                : "border  border-red-600"
            }
              px-6 py-4  flex items-center  font-extrabold  justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            March 18
          </motion.span>
        </motion.div>
      </div>
      {/* Events Card Container */}
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr px-8 grid-cols-1 gap-12  sm:mt-20 lg:mx-auto lg:max-w-[90%] lg:grid-cols-3">
        {filteredTechnicalEvents?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
}
