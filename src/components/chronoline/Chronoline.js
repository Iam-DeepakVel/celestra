import React, { useEffect } from "react";
import "./chronoline.css";
import { GiTimeBomb } from "react-icons/gi";
import { TiLocation } from "react-icons/ti";
import logo from "../../assets/logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";

const events = [
  {
    name: "Celestra Coding",
    time: "Mar 17, 9:00 AM",
    venue: "IT-201",
  },
  {
    name: "Reverse Coding",
    time: "Mar 17, 10:30 AM",
    venue: "IT-206",
  },
  {
    name: "Bug Busters",
    time: "Mar 17, 12:00 PM",
    venue: "IT-442",
  },
  {
    name: "Code Jam",
    time: "Mar 17, 1:30 PM",
    venue: "IT-443",
  },
  {
    name: "Web Designing",
    time: "Mar 17, 3:00 PM",
    venue: "IT-444",
  },
  {
    name: "Technical Quiz",
    time: "Mar 17, 4:00 PM",
    venue: "IT-201",
  },
  {
    name: "Ideathon",
    time: "Mar 17, 5:00 PM",
    venue: "IT-206",
  },
  {
    name: "Movie Quiz",
    time: "Mar 18, 9:00 AM",
    venue: "IT-442",
  },
  {
    name: "Anime Quiz",
    time: "Mar 18, 10:30 AM",
    venue: "IT-443",
  },
  {
    name: "Cross Fire",
    time: "Mar 18, 12:00 PM",
    venue: "IT-444",
  },
  {
    name: "Snap Word",
    time: "Mar 18, 1:30 PM",
    venue: "IT-201",
  },
  {
    name: "Pictionary",
    time: "Mar 18, 3:00 PM",
    venue: "IT-206",
  },
  {
    name: "Seminar",
    time: "Mar 18, 4:00 PM",
    venue: "IT-442",
  },
  {
    name: "Workshop",
    time: "Mar 18, 5:00 PM",
    venue: "IT-443",
  },
  {
    name: "Paper Presentation",
    time: "Mar 18, 5:00 PM",
    venue: "IT-444",
  },
  {
    name: "Table Tennis",
    time: "Mar 18, 5:00 PM",
    venue: "IT-444",
  },
  {
    name: "Valorant",
    time: "Mar 18, 5:00 PM",
    venue: "IT-444",
  },
  {
    name: "BGMI",
    time: "Mar 18, 5:00 PM",
    venue: "IT-444",
  },

];

const Chronoline = () => {
  useEffect(() => {
    let item = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function callback() {
      for (let i = 0; i < item.length; i++) {
        if (isElementInViewport(item[i])) {
          item[i].classList.add("in-view");
        }
      }
    }
    window.addEventListener("load", callback);
    window.addEventListener("resize", callback);
    window.addEventListener("scroll", callback);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("load", callback);
      window.removeEventListener("resize", callback);
      window.removeEventListener("scroll", callback);
    };
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="timeline bg-black font-poppins">
        <nav className="flex items-center  bg-black justify-between pb-10 md:px-4">
          <img
            src={logo}
            alt="celestra-logo"
            className="lg:absolute lg:left-4 lg:top-6 w-44 md:w-52 rounded-full"
          />
          {/* Menu */}
          <div
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-20 cursor-pointer"
          >
            <p className="text-xl text-white celestraHeroFont tracking-widest">
              {" "}
              <span className="text-4xl text-red-500">M</span>enu
            </p>
            <span className={`mt-2 ${open && "rotate-90"}`}>
              <AiOutlineDoubleRight size={20} color="white" />
            </span>
            {/* DropDown Menu */}
            {open && (
              <div className="absolute top-14 right-0 lg:-right-10 opacity-95 w-72 h-auto bg-white rounded-lg celestraHeroFont">
                <ul>
                  <a
                    href="/"
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-red-300 "
                  >
                    <HiOutlineHome size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      H<span className="text-black text-xl">ome</span>{" "}
                    </div>
                  </a>
                  <a
                    href="/about-us"
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <TbUnlink size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      A<span className="text-black text-xl">bout Us</span>{" "}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <SiEventstore size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      E<span className="text-black text-xl">vents</span>{" "}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <GiTimeSynchronization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      C<span className="text-black text-xl">hronoline</span>{" "}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <VscOrganization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      O<span className="text-black text-xl">ur Team</span>{" "}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex text-lg px-4 py-4 items-center gap-3 rounded-b-lg  transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <FaTeamspeak size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      C<span className="text-black text-xl">ontact Us</span>{" "}
                    </div>
                  </a>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <p className="text-4xl tracking-wider text-white celestraHeroFont text-center mb-20">
          <span className="text-6xl text-[rgb(255,0,0)] tracking-widest">C</span>hronoline
        </p>
        <ul>
          {events?.map((event) => (
            <li>
              {/* Event Card */}
              <div>
                <h3 className="text-3xl tracking-widest celestraHeroFont mb-4">
                  {event.name}
                </h3>
                <span className="flex items-center gap-10">
                  <p className="flex items-center gap-2 text-xl">
                    {" "}
                    <GiTimeBomb size={25} /> {event.time}
                  </p>
                  <p className="flex items-center gap-1 text-xl">
                    <TiLocation size={25} /> {event.venue}
                  </p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chronoline;
