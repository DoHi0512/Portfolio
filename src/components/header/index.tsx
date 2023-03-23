import { ScrollState } from "@/pages/_app";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
export const Header = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const HeaderMap = ["Main", "About", "Projects", "Skills", "Career"];
  const Head = HeaderMap.map((item, idx) => {
    return (
      <S.HeaderText onClick={() => setScroll(idx)} key={idx}>
        {item}
      </S.HeaderText>
    );
  });
  return (
    <S.HeaderLayout>
      <S.HeaderNav>{Head}</S.HeaderNav>
      <S.ProgressBar>
        <S.Progress moveX={scroll}></S.Progress>
      </S.ProgressBar>
    </S.HeaderLayout>
  );
};
