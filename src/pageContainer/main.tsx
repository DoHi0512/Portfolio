import { Typewriter } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { ScrollState } from "@/pages/_app";
import { useEffect } from "react";
export const MainPage = () => {
  const words = ["안녕하세요", "프론트엔드 개발자", "이동훈입니다"];
  const [scroll, setScroll] = useRecoilState(ScrollState);
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <div className="text-5xl font-sans flex-row text-center leading-snug font-thin">
        <Typewriter
          words={words}
          cursor={true}
          typeSpeed={50}
          delaySpeed={750}
          cursorStyle={"⎸"}
        ></Typewriter>
      </div>
      <div className="absolute text-5xl flex flex-col justify-around left-[5%] h-[30rem]">
        <div className="nav-link" onClick={() => setScroll(1)}>
          About
        </div>
        <div className="nav-link" onClick={() => setScroll(2)}>
          Career
        </div>
        <div className="nav-link" onClick={() => setScroll(3)}>
          Skills
        </div>
        <div className="nav-link" onClick={() => setScroll(4)}>
          Projects
        </div>
      </div>
    </div>
  );
};
