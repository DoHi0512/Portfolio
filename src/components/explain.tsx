import FadeIn from "react-fade-in/lib/FadeIn";
import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import Slider from "react-slick";
interface ContentProps {
  title: string;
  img: string;
  sentence: string;
  desc: string;
  homepage?: string;
  github?: string;
  youtube?: string;
}
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
};
export const Explain = ({
  title,
  desc,
  sentence,
  img,
  homepage,
  github,
  youtube,
}: ContentProps) => {
  return (
    <FadeIn>
      <div className="flex justify-center items-center w-full h-[40rem] flex-col">
        <div className="w-full h-1/5 sort-center text-4xl font-bold">{title}</div>
        <div className="w-full h-[80%] flex flex-row justify-between">
          <Slider {...settings} className="w-1/2">
            <img className="explain-image" src="./bmfo1.png" />
            <img className="explain-image" src="./bmfo2.png" />
            <img className="explain-image" src="./bmfo3.png" />
          </Slider>
          <div className="w-[45%] h-1/2">
            <div className="text-2xl">{sentence}</div>
            <div className="break-words texst-1xl text-gray mt-2">{desc}</div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
