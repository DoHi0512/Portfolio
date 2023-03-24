import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Content } from "../components/content";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useRecoilState } from "recoil";
import { PageState, ScrollState } from "@/pages/_app";
import { Explain } from "@/components/explain";
import { bmfo, sciport } from "@/static/projects";
import Modal from "react-modal";
import { useState } from "react";
import { ModalPage } from "@/components/modal";
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
      className="w-full h-full flex justify-center relative items-center flex-col "
    >
      <div className="w-[60rem] h-[30rem] border-[3px] border-[#C8E6C9] rounded-2xl flex items-center justify-center shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]">
        <div className="w-[90%] h-[90%]">
          <div className="w-full h-[2rem] border-b-[1px] flex items-center border-gray">
            <div className="pro-text">프로젝트</div>
            <div className="pro-text">세부 사항</div>
          </div>
          <Slider {...settings} className="h-4/5 [&.slick-slider]:h-full">
            <Explain {...bmfo} />
            <Explain {...sciport} />
          </Slider>
        </div>
      </div>
    </FadeIn>
  );
};
