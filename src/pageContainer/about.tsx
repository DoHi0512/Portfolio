import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { BiPhoneCall, BiPencil } from "react-icons/bi";
import { ScrollState } from "@/pages/_app";
import FadeIn from "react-fade-in";
import { Header } from "@/components/header";
import { useEffect } from "react";
const AboutData = [
  { title: "이름", desc: "이동훈", icon: <AiOutlineUser /> },
  { title: "생일", desc: "2005.05.12", icon: <AiOutlineCalendar /> },
  { title: "주소지", desc: "광주광역시 서구", icon: <CiLocationOn /> },
  { title: "연락처", desc: "010-5773-2408", icon: <BiPhoneCall /> },
  { title: "이메일", desc: "202110309@bssm.hs.kr", icon: <AiOutlineMail /> },
  { title: "학력", desc: "부산소프트웨어마이스터고", icon: <BiPencil /> },
];
export const AboutPage = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const AboutItem = AboutData.map((item, idx) => {
    return (
      <div key={idx}>
        <div className="flex flex-row justify-center">
          <div className="flex justify-center items-center mr-2 [&>svg]:w-[2rem] [&>svg]:h-[2rem]">
            {item.icon}
          </div>
          <div className="text-2xl flex justify-center items-center">
            {item.title}
          </div>
        </div>
        <div className="text-[1rem] mt-2 flex justify-center text-gray">
          {item.desc}
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-full flex justify-center relative items-center flex-col">
      <div className="shadow-[0px_4px_30px_rgba(0,_0,_0,_0.25)] w-[60rem] h-[30rem] border-[3px] border-[#A2D5C6] rounded-2xl flex justify-center items-center">
        <FadeIn
          visible={1 ? true : false}
          transitionDuration={1000}
          delay={50}
          className="w-full grid grid-cols-3 gap-[2rem] gap-y-[7rem]"
        >
          {AboutItem}
        </FadeIn>
      </div>
    </div>
  );
};
