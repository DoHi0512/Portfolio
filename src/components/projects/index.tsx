import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Content } from "../content";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useRecoilState } from "recoil";
import { ScrollState } from "@/pages/_app";
import { useState } from "react";
const sciport = {
  title: "부산국립과학관 아카이브",
  img: "/sciport.png",
  sentence: "부산국립과학관 강의 자료를 모아놓는 아카이브",
  desc: "디자인과 프론트엔드 개발을 진행하였습니다. 페이지네이션 기법을 활용해 성능을 향상시키고 ~",
  homepage: "https://youtu.be/JK6pAdyII1c",
  github: "https://github.com/SciPort/sciport_archive_frontend",
  youtube: "https://youtu.be/JK6pAdyII1c",
};
const bmfo = {
  title: "매점 프리오더 서비스",
  img: "/bmfo.png",
  sentence: "매점에 가기 전 미리 주문하는 플랫폼",
  desc: "디자인과 프론트엔드 개발을 진행하였습니다. 페이지네이션 기법을 활용해 성능을 향상시키고 ~",
  homepage: "https://dohilog.vercel.app",
  github: "https://github.com/SickFriends/BMFO_front",
};
export const Projects = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const [state, setState] = useState(1);
  console.log(state);
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
      visible={scroll == 2 ? true : false}
      transitionDuration={1000}
      delay={50}
      className="w-full h-full flex justify-center relative items-center flex-col bg-bgBlue"
    >
      <div className="lg:h-[4rem] first-letter:w-full flex justify-center items-center lg:text-5xl text-[6rem] text-[#4FA4A4A]">
        Projects
      </div>
      <div className="lg:w-[60rem] lg:h-[30rem] h-[90rem] w-[70rem] border-[3px] border-[#A2D5C6] rounded-2xl flex items-center justify-center">
        <div className="w-[90%] h-[90%]">
          <div className="w-full h-[2rem] border-b-[1px] flex items-center border-gray">
            <div className="flex h-full items-center  border-gray">
              <div
                onClick={() => setState(1)}
                className={`font-thin text-${
                  state ? "black" : "gray"
                }  w-[6rem] h-full flex items-center justify-center hover:bg-bgGray hover:text-[black] duration-300 hover:cursor-pointer`}
              >
                프로젝트 정보
              </div>
            </div>
            <div
              onClick={() => setState(0)}
              className={`text-${
                state ? "gray" : "black"
              } w-[6rem] h-full flex items-center justify-center hover:bg-bgGray hover:text-[black] duration-300 hover:cursor-pointer`}
            >
              세부 사항
            </div>
          </div>
          <Slider {...settings}>
            <Content {...bmfo} />
            <Content {...sciport} />
          </Slider>
        </div>
      </div>
    </FadeIn>
  );
};
