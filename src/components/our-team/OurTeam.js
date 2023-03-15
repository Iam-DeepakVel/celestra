import Navbar from "../../common/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import GradientAvatar from "../../assets/team-images/personAvatar1.png";

// Board Members
import karthiImg from "../../assets/team-images/board-members/karthick.jpg";
import rishiImg from "../../assets/team-images/board-members/rishi.jpg";
import sriSakthiImg from "../../assets/team-images/board-members/sriSakthi.jpg";
import sriAdityaImg from "../../assets/team-images/board-members/sriAditya.jpg";
import arunKumarImg from "../../assets/team-images/board-members/arunKumar.jpg";

// Fund Riser
import hareshV from "../../assets/team-images/fund-riser/haresh.jpg";

// Dev Team
import deepakImg from "../../assets/team-images/dev-team/deepak.jpg";
import gunaImg from "../../assets/team-images/dev-team/guna.jpg";
import { Helmet } from "react-helmet";

// Design Team
import arun from "../../assets/team-images/design-team/arunkumar.jpg";
import barath from "../../assets/team-images/design-team/barath.jpg";
import hareeshRam from "../../assets/team-images/design-team/hareeshram.jpg";
import harsha from "../../assets/team-images/design-team/harsha.jpg";
import karthikeyan from "../../assets/team-images/design-team/karthikeyan.jpg";
import pradeep from "../../assets/team-images/design-team/pradeep.jpg";
import sakthivel from "../../assets/team-images/design-team/sakthivel.jpg";
import tharan from "../../assets/team-images/design-team/tharan.jpg";
import thurka from "../../assets/team-images/design-team/thurka.jpg";
import kavi from "../../assets/team-images/design-team/kavi.jpg";
import narendaran from "../../assets/team-images/design-team/narendaran.jpg";

const boardMembers = [
  {
    name: "Karthick S",
    role: "Chairman",
    imageUrl: karthiImg,
  },
  {
    name: "Rishi Ragavendar D",
    role: "President",
    imageUrl: rishiImg,
  },
  {
    name: "Sri Sakthi B",
    role: "Vice President",
    imageUrl: sriSakthiImg,
  },
  {
    name: "Adithya A",
    role: "Treasurer",
    imageUrl: sriAdityaImg,
  },
  {
    name: "Arun Kumar V",
    role: "Treasurer",
    imageUrl: arunKumarImg,
  },
];

const webDevelopers = [
  {
    name: "Deepak V",
    role: "Full Stack Developer - Team Head",
    imageUrl: deepakImg,
    githubUrl: "https://github.com/Iam-DeepakVel",
    linkedinUrl: "https://www.linkedin.com/in/iamdeepakvel",
  },
  {
    name: "Guna P",
    role: "Frontend Developer / UI Designer",
    imageUrl: gunaImg,
    githubUrl: "https://github.com/guna-pandi",
    linkedinUrl: "https://www.linkedin.com/in/guna-p-aa3357245",
  },
  {
    name: "Khabilan S",
    role: "Web & App Developer",
    imageUrl: GradientAvatar,
    githubUrl: "https://github.com/Khabilan1003",
    linkedinUrl: "https://www.linkedin.com/in/khabilan-somasundaram-0335971b0/ ",
  },
  {
    name: "Bharath S",
    role: "Backend Developer",
    imageUrl: barath,
    githubUrl: "https://github.com/BarathOfficial",
    linkedinUrl: "https://www.linkedin.com/in/barath-sreedharan-50a5a020a",
  },
];

const designTeam = [
  {
    name: "Thurkaraman R",
    role: "Team Head",
    imageUrl: thurka,
  },
  {
    name: "Arun Kumar S",
    role: "Member",
    imageUrl: arun,
  },
  {
    name: "Narendran S",
    role: "Member",
    imageUrl: narendaran,
  },
  {
    name: "Ashwin S",
    role: "Member",
    imageUrl: GradientAvatar,
  },
  {
    name: "Jananitharan",
    role: "Member",
    imageUrl: tharan,
  },
  {
    name: "Hareesh Ram",
    role: "Member",
    imageUrl: hareeshRam,
  },
  {
    name: "Kavikumar C",
    role: "Member",
    imageUrl: kavi,
  },
  {
    name: "Vikram",
    role: "Member",
    imageUrl: GradientAvatar,
  },
  {
    name: "Sajeev",
    role: "Member",
    imageUrl: GradientAvatar,
  },
  {
    name: "Pratheep",
    role: "Member",
    imageUrl: pradeep,
  },
  {
    name: "Sakthivel",
    role: "Member",
    imageUrl: sakthivel,
  },
  {
    name: "Harshavardhan",
    role: "Member",
    imageUrl: harsha,
  },
  {
    name: "Karthikeyan",
    role: "Member",
    imageUrl: karthikeyan,
  },
];

export default function OurTeam() {
  return (
    <div className="bg-black py-6 sm:py-10 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CELESTRA | Team IT</title>
      </Helmet>
      {/* Navbar */}
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl font-bold tracking-widest celestraHeroFont  text-white sm:text-4xl"
          >
            <span className="text-5xl text-red-600">M</span>eet{" "}
            <span className="text-5xl text-red-600">O</span>ur{" "}
            <span className="text-5xl text-red-600">T</span>eam
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 text-lg tracking-widest  text-gray-400 celestraHeroFont"
          >
            We're a powerhouse of enthusiastic individuals who are absolutely
            lit about what we do!
          </motion.p>
        </div>

        {/*Board Members*/}
        <div className="mt-14">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">B</span>oard{" "}
            <span className="text-5xl text-red-600">M</span>embers
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {boardMembers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500  shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Special Thanks to  */}
        <div className="mt-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">S</span>pecial{" "}
            <span className="text-5xl text-red-600">T</span>hanks to
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-full sm:max-w-md gap-8">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              key="Haresh"
              className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500  shadow-red-400 bg-[#111111] py-10 px-8"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={hareshV}
                alt="Haresh"
              />
              <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                Haresh V
              </h3>
              <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                Joint Secretary of IT / Treasurer
              </p>
            </motion.li>
          </ul>
        </div>

        {/* Web Development Team */}
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">W</span>eb{" "}
            <span className="text-5xl text-red-600">D</span>evelopers
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {webDevelopers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500 shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillLinkedin size={22} />
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Design Team */}
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">D</span>esign{" "}
            <span className="text-5xl text-red-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {designTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500 shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl celestraHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
