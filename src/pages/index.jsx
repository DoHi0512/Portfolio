import { MainPage } from "@/pageContainer/main";
import { AboutPage } from "@/pageContainer/about";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ScrollState } from "./_app";
import { Header } from "@/components/header";
import { Projects } from "@/pageContainer/projects";
import { SectionsContainer, Section } from "react-fullpage";
const Home = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  const containerRef = useRef(null);
  let options = {
    delay: 750,
    scrollBar: false,
    navigation: false,
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };
  useEffect(() => {
    console.log(containerRef.current);
    console.log(containerRef.current.state.activeSection);
    containerRef.current.setAnchor(scroll);
  }, [scroll]);

  return (
    <>
      <Header />
      <SectionsContainer {...options} ref={containerRef}>
        <Section>
          <MainPage />
        </Section>
        <Section>
          <AboutPage />
        </Section>
        <Section>
          <Projects />
        </Section>
      </SectionsContainer>
    </>
  );
};
export default Home;
