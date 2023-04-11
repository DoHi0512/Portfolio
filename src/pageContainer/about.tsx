import FadeIn from "react-fade-in";
import { useState } from "react";
import { AboutData } from "@/static/about.data";

export const AboutPage = () => {
  const AboutItem = AboutData.map((item, idx) => {
    return (
      <div key={idx}>
        <div className="flex flex-row justify-center">
          <div className="flex justify-center items-center mr-2 [&>svg]:w-[3rem] [&>svg]:h-[3rem]">
            {item.icon}
          </div>
          <div className="text-2xl flex justify-center items-center">
            {item.title}
          </div>
        </div>
        <div className="text-[1rem] mt-2 flex justify-center text-gray">
          {item.desc}
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-full flex justify-center relative items-center flex-row">
      <div className="shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)] w-[65rem] h-[35rem] border-[3px] border-[#A2D5C6] rounded-2xl flex justify-center items-center">
        <FadeIn
          visible={1 ? true : false}
          transitionDuration={1000}
          delay={50}
          className="w-full grid grid-cols-3 gap-[2rem] gap-y-[7rem]"
        >
          {AboutItem}
        </FadeIn>
      </div>
      <div className="h-full"></div>
    </div>
  );
};
