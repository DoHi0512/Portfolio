import { useInterval } from "@/hooks/useInteval";
import { useEffect, useId, useMemo, useState } from "react";
import * as S from "./style";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
export const MainPage = () => {
  const words = ["안녕하세요\n프론트엔드 개발자\n이동훈입니다"];
  return (
    <S.MainLayout>
      <S.NavBar>
        <S.NavLink>About me</S.NavLink>
        <S.NavLink>Career</S.NavLink>
        <S.NavLink>Skills</S.NavLink>
        <S.NavLink>Projects</S.NavLink>
      </S.NavBar>
      <S.MainText>
        <Typewriter
          words={words}
          cursor={true}
          typeSpeed={150}
          cursorStyle={"⎸"}
        ></Typewriter>
      </S.MainText>
    </S.MainLayout>
  );
};
