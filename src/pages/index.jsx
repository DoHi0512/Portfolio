import { MainPage } from "@/pageContainer/main";
import { AboutPage } from "@/pageContainer/about";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ScrollState } from "./_app";
import { Header } from "@/components/header";
import { Projects } from "@/pageContainer/projects";
const Home = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const containerRef = useRef(null);
  const pageableRef = useRef(null);
  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {
      childSelector: "[data-anchor]",
      anchors: [],
      pips: false,
      animation: 500,
      delay: 0,
      throttle: 50,
      orientation: "vertical" | "horizontal",
      swipeThreshold: 50,
      freeScroll: false,
      navPrevEl: false,
      navNextEl: false,
      infinite: false,
      events: {
        wheel: true,
        mouse: true,
        touch: false,
        keydown: true,
      },
      easing: (currentTime, startPos, endPos, interval) => {
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
    if (containerRef.current) {
      containerRef.current.pageable?.scrollToPage(scroll);
    }
  }, [scroll]);
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
        <div data-anchor="projects">
          <Projects />
        </div>
        <div data-anchor="HI">HI</div>
        <div data-anchor="Hello">Hello</div>
      </div>
    </>
  );
};
export default Home;
