import { MainPage } from "@/pageContainer/main";
import type { NextPage } from "next";
import { AboutPage } from "@/pageContainer/about";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ScrollState } from "./_app";
import { Header } from "@/components/header";
const Home: NextPage = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const containerRef = useRef<any>(null);
  const pageableRef = useRef<any>(null);
  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {
      childSelector: "[data-anchor]",
      anchors: [],
      pips: false,
      animation: 500,
      delay: 0,
      throttle: 50,
      orientation: "vertical" as "vertical" | "horizontal",
      swipeThreshold: 50,
      freeScroll: false,
      navPrevEl: false,
      navNextEl: false,
      infinite: false,
      events: {
        wheel: true,
        mouse: true,
        touch: true,
        keydown: false,
      },
      easing: (currentTime: any, startPos: any, endPos: any, interval: any) => {
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      onStart: () => {
        setScroll(containerRef.current.pageable?.index);
      },
    });
    pageableRef.current = pageable;
  };

  useEffect(() => {
    loadPageable();
  }, []);
  useEffect(() => {
    console.log(containerRef.current.pageable);
    if (containerRef.current) {
      containerRef.current.pageable?.scrollToPage(scroll);
    }
  }, [scroll]);
  const data = [<MainPage />, <AboutPage />];
  return (
    <>
      <Header />
      <div ref={containerRef}>
        <div data-anchor="main" id="page-1">
          <MainPage />
        </div>
        <div data-anchor="about">
          <AboutPage />
        </div>
        <div data-anchor="about1">
          <AboutPage />
        </div>
        <div data-anchor="about2">
          <AboutPage />
        </div>
      </div>
    </>
  );
};
export default Home;
