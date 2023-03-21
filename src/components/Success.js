import React from "react";
import logo from "../Assets/logo.svg";
import banner from "../Assets/banner.png";
export default function Success() {
  return (
    <div>
      <div className="bg-red-600 w-screen h-screen">
        <div className="bg-red-600 flex flex flex-wrap  flex-col pt-[10%] ">
          <img
            className=" scale-75 mb-7 text-[1.5rem] flex justify-center items-center "
            src={logo}
            alt="logo"
          />
          <p className="  text-6xl text-white text-center font-Barlow mt-[10%]">
            TEBRİKLER! <br /> PİZZANIZ YOLA ÇIKTI!
          </p>
        </div>
      </div>
    </div>
  );
}
