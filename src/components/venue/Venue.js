import React from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { MdShareLocation, MdFoodBank } from "react-icons/md";
import { SiEventstore } from "react-icons/si";

const Venue = () => {
  return (
    <div className="px-6 py-14 md:px-10 md:py-24 h-auto max-w-screen-7xl mx-auto bg-black">
      <ul className="grid grid-cols-1 lg:pl-10 lg:grid-cols-4 gap-20">
        <li className="flex flex-col gap-3 -mb-4">
          <div className="flex gap-4">
            <BsCalendarWeek size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">D</span>ate
              </h2>
              <p className="text-sm tracking-widest">17-18 March 2023</p>
            </div>
          </div>
          <div className="h-1  w-[30%] sm:w-[16%] lg:w-[40%]  bg-red-500 rounded-full"></div>
        </li>
        <li className="flex flex-col gap-3 -mb-4 ml-auto lg:ml-0">
          <div className="flex gap-4">
            <MdShareLocation size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">V</span>enue
              </h2>
              <p className="text-sm tracking-widest">CIT - Coimbatore</p>
            </div>
          </div>
          <div className="h-1 ml-2 w-[45%] lg:w-[44%]  bg-red-500 rounded-full"></div>
        </li>
        <li className="flex flex-col gap-3 -mb-2">
          <div className="flex gap-4">
            <MdFoodBank size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">F</span>ood{" "}
                <span className="text-2xl text-red-500">S</span>tall
              </h2>
              <p className="text-sm tracking-wider">More Delicious Dishes</p>
            </div>
          </div>
          <div className="h-1 ml-2 w-[35%] sm:w-[17%] lg:w-[45%] bg-red-500 rounded-full"></div>
        </li>
        <li className="flex flex-col gap-3 -mb-4 ml-auto lg:ml-0">
          <div className="flex gap-4">
            <SiEventstore size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">E</span>vents
              </h2>
              <p className="text-sm tracking-widest">Fifteen Plus</p>
            </div>
          </div>
          <div className="h-1 ml-1 w-[55%] lg:w-[38%]  bg-red-500 rounded-full"></div>
        </li>
      </ul>
    </div>
  );
};

export default Venue;
