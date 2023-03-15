import { GrTechnology } from "react-icons/gr";
import { CgChevronDoubleRight } from "react-icons/cg";
import { RiMedal2Line, RiMedal2Fill } from "react-icons/ri";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { TfiControlBackward } from "react-icons/tfi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";

export default function SingleEventPage({
  eventDetails,
  noPrize,
  spotRegistration,
  formsLink,
  discordlink,
  isDetails,
  noVenue,
}) {
  return (
    <div className="bg-black min-h-screen py-24 sm:py-20">
      {/* Back to events button */}
      <Link
        to={"/events"}
        className="absolute flex items-center gap-2 celestraHeroFont top-6 left-6 sm:top-10 sm:left-8"
      >
        <TfiControlBackward size={25} color="white" />
        <motion.h2
          whileTap={{ scale: 0.8 }}
          className="text-white tracking-widest text-xl"
        >
          Explore
        </motion.h2>
      </Link>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:pr-4 font-poppins"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src={eventDetails.image}
                alt={eventDetails.eventName}
              />
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
              <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -ml-16 w-[68.5625rem] -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
              >
                <path
                  fill="url(#e7ccf164-908d-46dd-9194-2f8a16ad5a93)"
                  fillOpacity=".4"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                  <linearGradient
                    id="e7ccf164-908d-46dd-9194-2f8a16ad5a93"
                    x1="1097.04"
                    x2="-141.165"
                    y1=".22"
                    y2="363.075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#776FFF" />
                    <stop offset={1} stopColor="#FF4694" />
                  </linearGradient>
                </defs>
              </svg>
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <blockquote className="mt-6 text-lg font-semibold leading-8 text-white">
                  <p>{eventDetails.description}</p>
                </blockquote>
              </figure>
            </div>
          </motion.div>
          <div>
            <div className="text-base leading-7 lg:max-w-lg">
              {/* Event Type */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-lg font-semibold tracking-wider leading-7 font-poppins text-white"
              >
                {eventDetails.type}
              </motion.p>
              {/* Event Name */}
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-2 text-3xl font-bold  text-white celestraHeroFont tracking-widest sm:text-4xl"
              >
                {eventDetails.eventName}
              </motion.h1>
              {/* Time ,Date , Venue Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-2 bg-red-500 min-w-[40%] sm:min-w-[35%] h-12 rounded-xl mt-4"
                >
                  <GrTechnology size={20} color="red" />
                  <p className="text-black text-lg font-poppins font-bold">
                    {eventDetails.dateTime}
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 px-4  border-red-500 border min-w-[40%] sm:min-w-[35%] h-12 rounded-xl mt-4"
                >
                  <FaPlaceOfWorship size={20} color="white" />
                  <div className="text-white text-lg font-poppins font-bold">
                    <span>{noVenue ? "Mode:" : "Venue:"}</span>
                    <span className="ml-2">{eventDetails.venue}</span>
                  </div>
                </motion.div>
              </motion.div>
              {/* Rules Section */}
              <div className="max-w-xl text-white">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.68 }}
                  variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-xl sm:text-2xl celestraHeroFont tracking-widest text-white font-semibold mt-6"
                >
                  {isDetails ? "Details" : "Rules"}
                </motion.h2>
                {/* Rule Mapping */}
                {eventDetails.rules.map((rule) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                      hidden: { opacity: 0, x: 120 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    key={rule}
                    className="mt-6 flex gap-1 font-poppins"
                  >
                    <span>
                      <CgChevronDoubleRight size={20} color="red" />
                    </span>
                    <p className="mt-[2px] sm:mt-0 text-lg ">{rule}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* discord */}
            {discordlink ? (
              <motion.div
                className="flex mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="flex flex-col items-center  ">
                  <div className="flex justify-center flex-row gap-3">
                    <SiDiscord className=" text-red-600 text-4xl" />
                    <h2 className=" text-lg  celestraHeroFont underline underline-offset-8  tracking-widest text-red-500 font-semibold">
                      <a href="https://discord.gg/ZJcpc2QH">
                        Click Here To Join Discord...
                      </a>
                    </h2>
                  </div>
                  <h2 className="text-lg  font-poppins tracking-widest text-white font-semibold">
                    {eventDetails.discord}
                  </h2>
                </div>
              </motion.div>
            ) : null}
            {/* Price Section */}
            {noPrize ? null : (
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.72 }}
                  variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-xl  sm:text-2xl celestraHeroFont tracking-widest text-white font-semibold mt-12"
                >
                  Prize
                </motion.h2>

                {/* Medal Secion */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.76 }}
                  variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex flex-wrap md:flex-nowrap gap-12"
                >
                  {/* Winner Medal */}
                  <div className="flex mt-4">
                    <RiMedal2Line size={50} color="gold" />
                    <div className="flex flex-col items-center gap-1">
                      <h2 className="text-lg celestraHeroFont tracking-widest text-white font-semibold">
                        First Place
                      </h2>
                      <h2 className="text-lg  font-poppins tracking-widest text-white font-semibold">
                        Rs.{eventDetails.firstprize}/-
                      </h2>
                    </div>
                  </div>
                  {/* Winner Medal */}
                  {eventDetails.secondprize !== 0 && (
                    <div className="flex mt-4">
                      <RiMedal2Fill size={50} color="silver" />
                      <div className="flex flex-col items-center gap-1 ">
                        <h2 className="text-lg  celestraHeroFont tracking-widest text-white font-semibold">
                          Second Place
                        </h2>
                        <h2 className="text-lg  font-poppins tracking-widest text-white font-semibold">
                          Rs.{eventDetails.secondprize}/-
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* third */}
                  {eventDetails.thirdprize !== 0 && (
                    <div className="flex mt-4">
                      <RiMedal2Fill size={50} color="#CD7F32" />
                      <div className="flex flex-col items-center gap-1 ">
                        <h2 className="text-lg  celestraHeroFont tracking-widest text-white font-semibold">
                          Third Place
                        </h2>
                        <h2 className="text-lg  font-poppins tracking-widest text-white font-semibold">
                          Rs.{eventDetails.thirdprize}/-
                        </h2>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            )}

            {/* Contact Section */}
            <div className="mt-12">
              {/* Heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-xl sm:text-2xl celestraHeroFont tracking-widest text-white font-semibold"
              >
                Contact
              </motion.h2>
              <div className="mt-4 flex flex-col justify-center gap-3">
                {/* Contact Mapping*/}
                {eventDetails.contact.map((contact) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                      hidden: { opacity: 0, x: 120 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    key={contact.phoneNo}
                    className="flex items-center font-poppins gap-2"
                  >
                    <MdWifiCalling3 size={25} color="white" />
                    <div className="text-white text-lg flex items-center gap-4">
                      {" "}
                      <span>{contact.name}</span>
                      {"-"}
                      <span>{contact.phoneNo}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex">
              {spotRegistration ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  class="flex items-center gap-4 font-medium celestraHeroFont tracking-widest text-white group"
                >
                  <BiErrorAlt size={30} color="#dd524b" />
                  <p className="text-2xl">
                    Spot Registration Only
                    <span className="text-red-500 ml-2 text-2xl">!!</span>{" "}
                  </p>
                </motion.div>
              ) : (
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.1 }}
                  variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href={`${
                    formsLink
                      ? formsLink
                      : "https://docs.google.com/forms/d/e/1FAIpQLSdhesmV8BqH-S29TDZR9Lp980zBvDwfJpTpneya4EdC-L-Zqg/viewform?usp=sf_link"
                  }`}
                  class="relative px-5 text-center py-2  font-medium celestraHeroFont tracking-widest text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
                  <span class="relative">Register Now</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
