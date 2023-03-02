import { useState } from "react";
import FlagshipEvents from "./FlagshipEvents";
import NonTechnicalEvents from "./NonTechnicalEvents";
import TechnicalEvents from "./TechnicalEvents";
import logo from "../../assets/logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { TbUnlink } from "react-icons/tb";

export default function AllEvents() {
  const [open, setOpen] = useState(false);
  const [eventType, setEventType] = useState(1);
  return (
    <div className="bg-black min-h-screen py-4 sm:py-8">
      <nav className="flex items-center justify-between pb-10 md:px-4">
        <img
          src={logo}
          alt="celestra-logo"
          className="lg:absolute lg:left-4 lg:top-6 w-44 md:w-52 rounded-full"
        />
        {/* Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="relative flex  items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-24 cursor-pointer"
        >
          <p className="text-xl text-white celestraHeroFont tracking-widest">
            {" "}
            {open ? (
              <div className="flex items-center">
                <span className="text-4xl text-red-500">C</span>
                <span className="mt-1">lose</span>
              </div>
            ) : (
              <>
                <span className="text-4xl text-red-500">M</span>
                <span>enu</span>
              </>
            )}
          </p>
          <span className={`mt-2 ${open && "rotate-90"}`}>
            <AiOutlineDoubleRight size={20} color="white" />
          </span>
          {/* DropDown Menu */}
          {open && (
            <div className="absolute top-14 z-100 right-0 opacity-95 w-72 h-auto bg-white rounded-lg celestraHeroFont ">
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
                  href="/chronoline"
                  className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                >
                  <GiTimeSynchronization size={20} />{" "}
                  <div className="text-red-500 text-2xl ">
                    C<span className="text-black text-xl">hronoline</span>{" "}
                  </div>
                </a>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="mx-auto max-w-7xl  px-6 lg:px-8">
        {/* Events selection Section */}
        <div className="text-white celestraHeroFont mb-20 mt-6 flex gap-12  justify-around sm:justify-center lg:gap-12 flex-wrap lg:flex-nowrap ">
          <span
            onClick={() => setEventType(1)}
            className={` ${
              eventType === 1
                ? "bg-red-600 text-[#111111]"
                : "border  border-red-600"
            }
              px-6 py-1 flex items-center justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            Technical
          </span>
          <span
            onClick={() => setEventType(2)}
            className={` ${
              eventType === 2
                ? "bg-red-600 text-[#111111]"
                : "border  border-red-600"
            }
              px-6 py-4  flex items-center justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            Non-Technical
          </span>
          <span
            onClick={() => setEventType(3)}
            className={` ${
              eventType === 3
                ? "bg-red-600 text-[#111111]"
                : "border  border-red-600"
            }
              px-6 py-4  flex items-center justify-center rounded-xl text-xl tracking-widest cursor-pointer `}
          >
            Flagship
          </span>
        </div>
      </div>
      {/* Events Section */}
      {eventType === 1 && <TechnicalEvents />}
      {eventType === 2 && <NonTechnicalEvents />}
      {eventType === 3 && <FlagshipEvents />}
    </div>
  );
}
