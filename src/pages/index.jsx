import { MainPage } from "@/pageContainer/main";
import { AboutPage } from "@/pageContainer/about";
import { Header } from "@/components/header";
import { Projects } from "@/pageContainer/projects";
import { SectionsContainer, Section } from "react-fullpage";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactPageScroller from "react-page-scroller";
import { useRecoilValue } from "recoil";
import { PageState } from "./_app";
const Home = () => {
  const page = useRecoilValue(PageState);
  return (
    <>
      <Header />
      <ReactPageScroller
        // animationTimer={page == 2 ? 0 : 1000}
        animationTimerBuffer={0}
        customPageNumber={page}
      >
        <MainPage />
        <AboutPage />
        <Projects />
      </ReactPageScroller>
    </>
  );
};
export default Home;
