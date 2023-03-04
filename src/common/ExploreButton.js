import React from "react";
import { GiBrightExplosion } from "react-icons/gi";

const ExploreButton = ({ path }) => {
  return (
    <div className="flex flex-col text-2xl">
      <a href={path} className="flex items-center">
        <span className="text-4xl">E</span>
        <span className="mt-2">xplore </span>
        <span className="ml-4 mt-1">
          <GiBrightExplosion size={25} color="red" />
        </span>
      </a>
      <div className="h-1  w-[30%] sm:w-[16%] lg:w-[15%]  bg-red-500 rounded-full"></div>
    </div>
  );
};

export default ExploreButton;
