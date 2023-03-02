import logo from "../assets/logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between pb-10 md:px-4">
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
          <div className="absolute top-14 z-100 right-0 opacity-95 w-72 h-auto bg-white rounded-lg celestraHeroFont ">
            <ul className="">
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
                href="/events"
                className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
              >
                <SiEventstore size={20} />{" "}
                <div className="text-red-500 text-2xl ">
                  E<span className="text-black text-xl">vents</span>{" "}
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
              <a
                href="/team"
                className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
              >
                <VscOrganization size={20} />{" "}
                <div className="text-red-500 text-2xl ">
                  O<span className="text-black text-xl">ur Team</span>{" "}
                </div>
              </a>
              <a
                href="/contact-us"
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
  );
};

export default Navbar;
