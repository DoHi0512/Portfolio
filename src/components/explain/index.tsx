import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import * as S from "./style";
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
    <div className="lg:h-[24rem] h-[60rem]">
      <div className="text-5xl lg:text-3xl h-[3rem] flex items-center font-bold">
        {title}
      </div>
      <div className="w-full h-full">
        <div className="w-full h-[70%] flex flex-row justify-between mt-2">
          <img
            src={img}
            className="object-contain w-[25rem] border-[1px] border-gray rounded-[5px]"
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
                <S.Icon>
                  <AiOutlineHome size="2rem" />
                  <span>Homepage</span>
                </S.Icon>
              </a>
              <a
                href={youtube}
                target="_blank"
                style={{ display: youtube ? "flex" : "none" }}
              >
                <S.Icon>
                  <AiOutlineYoutube size="2rem" />
                  <span>Youtube</span>
                </S.Icon>
              </a>
              <a
                href={github}
                target="_blank"
                style={{ display: github ? "flex" : "none" }}
              >
                <S.Icon>
                  <AiOutlineGithub size="2rem" />
                  <span>Github</span>
                </S.Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
