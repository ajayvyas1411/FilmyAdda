import React from "react";
import { assets } from "../assets/assets";
import { Calendar1Icon } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { ClockIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-start justify-center gap-4 px-6 md:px-16
    lg:px-36 bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen"
    >
      <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardian
        <br /> of the galaxy
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" />
          2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" />
          2h 8m
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
