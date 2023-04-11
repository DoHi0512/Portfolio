
import { Typewriter } from "react-simple-typewriter";
export const MainPage = () => {
  const words = ["안녕하세요", "프론트엔드 개발자", "이동훈입니다"];
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
        <a className="nav-link" href="#About">
          About
        </a>
        <a className="nav-link" href="#Projects">
          Projects
        </a>
        <a className="nav-link" href="#About">
          Skills
        </a>
        <a className="nav-link" href="#About">
          Career
        </a>
      </div>
    </div>
  );
};
