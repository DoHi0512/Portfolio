import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FadeIn from "react-fade-in/lib/FadeIn";
import { useRecoilState } from "recoil";
import { PageState, ScrollState } from "@/pages/_app";
import { Explain } from "@/components/explain";
import { bmfo, sciport } from "@/static/projects";

import { useState } from "react";

import Link from "next/link";
export const Projects = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <FadeIn
      visible={1 ? true : false}
      transitionDuration={1000}
      delay={50}
      className="w-full h-full flex justify-center relative items-center"
    >
      <div className="w-[65rem] h-[40rem] border-[3px] border-[#C8E6C9] rounded-2xl flex justify-center shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]">
        <Slider {...settings} className="w-[90%] h-full">
          <Explain {...bmfo} />
          <Explain {...sciport} />
        </Slider>
      </div>
    </FadeIn>
  );
};
