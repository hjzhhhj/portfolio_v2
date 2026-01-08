import { useState, useEffect } from "react";
import Introduce from "../pages/Introduce";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Activities from "../pages/Activities";
// import Awards from '../pages/Awards';
import Contact from "../pages/Contact";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  font-family: "Pretendard", sans-serif;
  background-color: #000000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Portfolio = () => {
  const [] = useState("home");
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PortfolioContainer>
      <Introduce />
      <AboutMe />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
    </PortfolioContainer>
  );
};

export default Portfolio;
