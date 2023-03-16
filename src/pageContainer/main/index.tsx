import * as S from "./style";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { ScrollState } from "@/pages/_app";
export const MainPage = () => {
  const words = ["안녕하세요", "프론트엔드 개발자", "이동훈입니다"];
  const [scroll, setScroll] = useRecoilState(ScrollState);
  return (
    <S.MainLayout>
      <S.MainText>
        <Typewriter
          words={words}
          cursor={true}
          typeSpeed={50}
          delaySpeed={750}
          cursorStyle={"⎸"}
        ></Typewriter>
      </S.MainText>
      <S.NavBar>
        <S.NavLink onClick={() => setScroll(2)}>About me</S.NavLink>
        <S.NavLink onClick={() => setScroll(1)}>Career</S.NavLink>
        <S.NavLink onClick={() => setScroll(1)}>Skills</S.NavLink>
        <S.NavLink onClick={() => setScroll(3)}>Projects</S.NavLink>
      </S.NavBar>
    </S.MainLayout>
  );
};
