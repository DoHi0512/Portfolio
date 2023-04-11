import { ContentProps } from "@/type/content.type";
import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import Slider from "react-slick";
export const Explain = (data: ContentProps) => {
  return (
    <FadeIn>
      <div className="flex justify-center items-center w-full h-[40rem] flex-col">
        <div className="w-full h-1/5 sort-center text-4xl font-bold">
          {data.title}
        </div>
        <div className="w-full h-[80%] flex flex-row justify-between">
          <Slider
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1000}
            arrows={false}
            className="w-1/2"
          >
            <img className="explain-image" src="./bmfo1.png" />
            <img className="explain-image" src="./bmfo2.png" />
            <img className="explain-image" src="./bmfo3.png" />
          </Slider>
          <div className="w-[45%] flex flex-col justify-between h-[65%]">
            <div className="">
              <div className="text-2xl">{data.sentence}</div>
              <div className="break-words texst-1xl text-gray h-[13rem]">
                {data.desc}
              </div>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex">
                {data.github ? (
                  <a href={data.github} target="_blank">
                    <div className="icon-box">
                      <AiOutlineGithub className="icon" />
                      <span className="icon-name">Github</span>
                    </div>
                  </a>
                ) : null}
                {data.homepage ? (
                  <a href={data.homepage} target="_blank">
                    <div className="icon-box">
                      <AiOutlineHome className="icon" />
                      <span className="icon-name">Homepage</span>
                    </div>
                  </a>
                ) : null}
                {data.youtube ? (
                  <a href={data.youtube} target="_blank">
                    <div className="icon-box">
                      <AiOutlineYoutube className="icon" />
                      <span className="icon-name">Youtube</span>
                    </div>
                  </a>
                ) : null}
              </div>
              <Link href="/detail">
                <div className="w-[5rem] h-[70%] rounded-lg bg-lightGreen flex justify-center items-center text-[white] text-[1.25rem]">
                  더보기
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
