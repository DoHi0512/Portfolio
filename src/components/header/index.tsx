import { ScrollState } from "@/pages/_app";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
export const Header = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  return (
    <S.HeaderLayout>
      <S.HeaderNav></S.HeaderNav>
      <S.ProgressBar>
        <S.Progress moveX={scroll}></S.Progress>
      </S.ProgressBar>
    </S.HeaderLayout>
  );
};
