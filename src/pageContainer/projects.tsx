import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Explain } from "@/components/explain";
import { bmfo, sciport } from "@/static/projects.content";
export const Projects = () => {
  return (
    <FadeIn
      visible={1 ? true : false}
      transitionDuration={1000}
      delay={50}
      className="w-full h-full flex justify-center relative items-center bg-bgBlue"
    >
      <div className="w-[65rem] h-[35rem] border-[3px]  bg-[white] border-[#C8E6C9] rounded-2xl flex justify-center shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)]">
        <Slider
          dots={true}
          infinite={true}
          speed={800}
          slidesToShow={1}
          slidesToScroll={1}
          className="w-[90%] h-full"
        >
          <Explain {...bmfo} />
          <Explain {...sciport} />
        </Slider>
      </div>
    </FadeIn>
  );
};
