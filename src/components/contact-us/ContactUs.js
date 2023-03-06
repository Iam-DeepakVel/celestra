import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import { TfiControlBackward } from "react-icons/tfi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Scroll to success message
  const scroll = () => {
    const section = document.querySelector("#success-message");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_KEY,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        "7LyaUOyXMwPeUP7aJ"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          scroll();
        },
        (error) => {
          setSuccess(true);
        }
      );
  };

  return (
    <div className="relative isolate min-h-screen bg-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CELESTRA | Contact Us</title>
      </Helmet>
      {/* Back to events button */}
      <Link
        to={"/events"}
        className="absolute hidden  lg:flex items-center gap-2 celestraHeroFont top-6 left-6 sm:top-10 sm:left-8"
      >
        <TfiControlBackward size={25} color="white" />
        <motion.h2
          whileTap={{ scale: 0.6 }}
          className="text-white tracking-widest text-xl"
        >
          Explore
        </motion.h2>
      </Link>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-10 pb-20 sm:pt-20 lg:static lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-red-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <svg
                className="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                viewBox="0 0 1155 678"
                aria-hidden="true"
              >
                <path
                  fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                  fillOpacity=".2"
                  d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                />
                <defs>
                  <linearGradient
                    id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                    x1="1155.49"
                    x2="-78.208"
                    y1="677.823"
                    y2="203.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="rgb(255,0,0)" />
                    <stop offset={1} stopColor="rgb(255,0,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-3xl font-bold text-white celestraHeroFont tracking-widest"
            >
              Celestra 2k23
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.7 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-6 text-lg leading-8 font-poppins text-gray-300"
            >
              The Department of Information Technology at Coimbatore Institute
              of Technology, Coimbatore hosts a highly anticipated
              National-level Technical Symposium.
              <br />
              <br />
              This event attracts numerous participants from various colleges
              who showcase their talents in a range of technical, non-technical,
              and entertaining events.
            </motion.p>
            <dl className="mt-10 space-y-4 font-poppins text-base leading-7 text-gray-300">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.9 }}
                variants={{
                  hidden: { opacity: 0, x: -120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Coimbatore Institute of Technology,
                  <br />
                  Avinashi road,
                  <br />
                  Civil Aerodrome post,
                  <br />
                  Coimbatore - 641014
                </dd>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.1 }}
                variants={{
                  hidden: { opacity: 0, x: -120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+91 70105 67021">
                    +91 70105 67021 , +91 79040 97972
                  </a>
                </dd>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.3 }}
                variants={{
                  hidden: { opacity: 0, x: -120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-x-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:itcelestra2k23@gmail.com"
                  >
                    itcelestra2k23@gmail.com
                  </a>
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 font-poppins lg:px-8 "
        >
          {/* Success Message */}
          {success && (
            <motion.div
              id="success-message"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: +120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-green-300 w-full mb-10 max-w-xl mx-auto lg:items-center lg:top-10 lg:right-10 lg:w-[40%] lg:absolute gap-2 px-6 flex items-start  py-4 rounded-lg"
            >
              <svg
                class="flex-shrink-0 inline w-12 h-12"
                fill="none"
                stroke="#285231"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-xl font-poppins">
                You're amazing! Your information has been submitted
                successfully!!
              </p>
            </motion.div>
          )}
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-md sm:text-lg tracking-wide font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="f_n"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-md sm:text-lg tracking-wide  font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="l_n"
                    id="last-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-md sm:text-lg tracking-wide  font-semibold leading-6 text-white"
                >
                  College Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    name="college-name"
                    id="college"
                    autoComplete=""
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-md sm:text-lg tracking-wide  font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-md sm:text-lg tracking-wide  font-semibold leading-6 text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-md sm:text-lg tracking-wide  font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-8 flex justify-end gap-6"
            >
              <Link
                to={"/"}
                className="rounded-md border-red-500 border celestraHeroFont tracking-widest px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Back to Home
              </Link>
              <button
                type="submit"
                className="rounded-md bg-red-500 celestraHeroFont tracking-widest px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                {`${loading ? "Sending..." : "Send Message"}`}
              </button>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
