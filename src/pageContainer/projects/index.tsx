import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Content } from "../../components/content";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useRecoilState } from "recoil";
import { PageState, ScrollState } from "@/pages/_app";
import { useState } from "react";
import * as S from "./style";
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
  const [page, setPage] = useRecoilState(PageState);
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
      className="w-full h-full flex justify-center relative items-center flex-col bg-bgBlue;"
    >
      <div className="w-[60rem] h-[30rem] border-[3px] border-[#C8E6C9] rounded-2xl flex items-center justify-center shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]">
        <div className="w-[90%] h-[90%]">
          <div className="w-full h-[2rem] border-b-[1px] flex items-center border-gray">
            <S.Text
              color={page ? "#cccccc" : "black"}
              onClick={() => setPage(0)}
            >
              프로젝트
            </S.Text>
            <S.Text
              color={page ? "black" : "#cccccc"}
              onClick={() => setPage(1)}
            >
              세부 사항
            </S.Text>
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
