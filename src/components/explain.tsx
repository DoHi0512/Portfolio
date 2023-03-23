import FadeIn from "react-fade-in/lib/FadeIn";
import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
interface ContentProps {
  title: string;
  img: string;
  sentence: string;
  desc: string;
  homepage?: string;
  github?: string;
  youtube?: string;
}
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
      <div className="text-3xl h-[3rem] flex items-center font-bold">
        {title}
      </div>
      <div className="w-full h-full">
        <div className="w-full h-[70%] flex flex-row justify-between mt-2">
          <img
            src={img}
            className="object-contain w-[25rem] h-[17rem] border-[1px] border-gray rounded-[5px]"
          />
          <div className="w-[27rem]">
            <div className="h-[80%]">
              <div className="text-[1.25rem] font-semibold">{sentence}</div>
              <div className="text-1 text-gray break-words w-4/5">{desc}</div>
            </div>
            <div className="h-[20%] grid grid-cols-3 w-[10rem]">
              <a
                href={homepage}
                target="_blank"
                style={{ display: homepage ? "flex" : "none" }}
              >
                <div className="icon">
                  <AiOutlineHome size="2rem" />
                  <span className="opacity-0 text-[0.5rem] text-gray">
                    Homepage
                  </span>
                </div>
              </a>
              <a
                href={youtube}
                target="_blank"
                style={{ display: youtube ? "flex" : "none" }}
              >
                <div className="icon">
                  <AiOutlineYoutube size="2rem" />
                  <span className="opacity-0 text-[0.5rem] text-gray">
                    Youtube
                  </span>
                </div>
              </a>
              <a
                href={github}
                target="_blank"
                style={{ display: github ? "flex" : "none" }}
              >
                <div className="icon">
                  <AiOutlineGithub size="2rem" />
                  <span className="opacity-0 text-[0.5rem] text-gray">
                    Github
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
