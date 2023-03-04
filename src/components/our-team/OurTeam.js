import Navbar from "../../common/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import GradientAvatar from "../../assets/team-images/gradientAvatar.avif";

// Board Members
import karthiImg from "../../assets/team-images/board-members/karthick.jpg";
import rishiImg from "../../assets/team-images/board-members/rishi.jpg";
import sriSakthiImg from "../../assets/team-images/board-members/sriSakthi.jpg";
import sriAdityaImg from "../../assets/team-images/board-members/sriAditya.jpg";
import arunKumarImg from "../../assets/team-images/board-members/arunKumar.jpg";

// Dev Team
import deepakImg from "../../assets/team-images/dev-team/deepak.jpg";
import { Helmet } from "react-helmet";

const boardMembers = [
  {
    name: "Karthick S",
    role: "Chairman",
    imageUrl: karthiImg,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rishi Ragavendar D",
    role: "President",
    imageUrl: rishiImg,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sri Sakthi B",
    role: "Vice President",
    imageUrl: sriSakthiImg,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Adithya A",
    role: "Treasurer",
    imageUrl: sriAdityaImg,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Arun Kumar V",
    role: "Treasurer",
    imageUrl: arunKumarImg,
    twitterUrl: "#",
    linkedinUrl: "#",
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
    name: "Guna",
    role: "Frontend Developer",
    imageUrl: GradientAvatar,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Khabilan",
    role: "Web & App Developer",
    imageUrl: GradientAvatar,
    githubUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Bharath",
    role: "Backend Developer",
    imageUrl: GradientAvatar,
    githubUrl: "#",
    linkedinUrl: "#",
  },
];

const designTeam = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: GradientAvatar,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: GradientAvatar,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: GradientAvatar,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: GradientAvatar,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl: GradientAvatar,
    twitterUrl: "#",
    linkedinUrl: "#",
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
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl font-bold tracking-wider celestraHeroFont  text-white sm:text-4xl"
          >
            Meet our team
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
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
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">B</span>oard{" "}
            <span className="text-5xl text-red-600">M</span>embers
          </motion.h2>
          <ul className="mx-auto px-2 mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {boardMembers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
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
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Web Development Team */}
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">W</span>eb{" "}
            <span className="text-5xl text-red-600">D</span>evelopers
          </motion.h2>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {webDevelopers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
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
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">D</span>esign{" "}
            <span className="text-5xl text-red-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {designTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
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
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
