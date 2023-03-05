import logo from "../../assets/logo.png";
import CIT_Logo from "../../assets/CIT_Logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import "./hero.css";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore, SiRiotgames } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        id="hero-container"
        className="flex flex-col pb-10 p-4 h-screen max-w-screen-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-4">
          {/* CIT Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2 }}
            className="mb-3 lg:absolute lg:left-6 lg:top-6"
          >
            <img
              src={CIT_Logo}
              alt="CIT-LOGO"
              className="w-20 sm:w-32 lg:w-24"
            />
          </motion.div>
          {/* Menu  */}
          <div
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-5 lg:top-12 cursor-pointer"
          >
            <p className="text-xl text-white celestraHeroFont tracking-wider">
              {" "}
              {open ? (
                <motion.div
                  whileTap={{ scale: 0.6 }}
                  className="flex items-center"
                >
                  <span className="text-4xl text-red-500">C</span>
                  <span className="mt-1">lose</span>
                </motion.div>
              ) : (
                <motion.div whileTap={{ scale: 0.6 }}>
                  <span className="text-4xl text-red-500">M</span>
                  <span>enu</span>
                </motion.div>
              )}
            </p>
            <span className={`mt-2 ${open && "rotate-90"}`}>
              <AiOutlineDoubleRight size={20} color="white" />
            </span>
            {/* DropDown Menu */}
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute top-14 z-100 right-0 opacity-95 w-72 h-auto bg-white rounded-lg celestraHeroFont "
              >
                <ul>
                  <Link
                    to={"/"}
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-red-300 "
                  >
                    <HiOutlineHome size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      H<span className="text-black text-xl">ome</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/about-us"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <TbUnlink size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      A<span className="text-black text-xl">bout Us</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/events"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <SiEventstore size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      E<span className="text-black text-xl">vents</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/games/online"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <SiRiotgames size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      G<span className="text-black text-xl">ames</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/chronoline"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <GiTimeSynchronization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      C<span className="text-black text-xl">hronoline</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/team"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <VscOrganization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      O<span className="text-black text-xl">ur Team</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"contact-us"}
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-b-lg  transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <FaTeamspeak size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      C<span className="text-black text-xl">ontact Us</span>{" "}
                    </div>
                  </Link>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
        {/* Hero-Text */}
        <div className="text-white md:mt-4  text-center celestraHeroFont tracking-widest">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: +70 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl tracking-widest md:tracking-wide sm:text-3xl lg:text-5xl mb-2 lg:mb-4"
          >
            <span className="text-3xl md:text-4xl lg:text-6xl">C</span>oimbatore{" "}
            <span className="text-3xl md:text-4xl lg:text-6xl">I</span>nstitute
            of <span className="text-3xl md:text-4xl lg:text-6xl">T</span>
            echnology
          </motion.h2>
          <motion.h5
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: +70 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-md sm:text-xl lg:text-3xl"
          >
            Department of{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
              I
            </span>
            nformation{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
              T
            </span>
            echnology
          </motion.h5>
        </div>

        <div className="flex flex-col-reverse lg:mt-12 lg:flex-row w-full justify-around px-10 items-center">
          <div className="flex flex-col mt-4  justify-center items-center gap-7 text-white celestraHeroFont tracking-widest">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }}
              variants={{
                hidden: { opacity: 0, y: -70 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center text-xl dynamic-text-shadow lg:text-3xl"
            >
              Plug in and power up for the
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }}
              variants={{
                hidden: { opacity: 0, y: +70 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center text-2xl lg:text-4xl dynamic-text-shadow"
            >
              Grand Event
            </motion.h1>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-center text-4xl  dynamic-celestra-shadow lg:text-7xl tracking-wider  "
            >
              <span className="text-6xl lg:text-8xl dynamic-celestra-white-shadow-mobile lg:dynamic-celestra-white-shadow text-red-500">
                C
              </span>
              ELESTR<span className="text-6xl lg:text-8xl">A</span>
            </motion.h1>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: +120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-4xl lg:text-7xl tracking-widest"
            >
              2<span className="text-red-500">k</span>23
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, y: +120 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={"/events"}
                className="w-[90%] lg:w-[60%] py-6 px-6 rounded-xl text-white text-xl tracking-widest bg-gradient-to-b from-[#fb3e38] via-[#fffdfd00] to-[#fb3e38]"
              >
                <span className="text-red-500 text-3xl">J</span>oin the Exc
                <span className="text-3xl text-red-500">it</span>ement
              </Link>
            </motion.div>
          </div>
          {/* Celestra Logo */}
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: +120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={logo}
            alt="celestra-logo"
            id="logo"
            className="rounded-full w-[80%] lg:max-w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
