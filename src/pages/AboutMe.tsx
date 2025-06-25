import { motion } from "framer-motion";
import styled from 'styled-components';
import User from "/Assets/Me.png";

const AboutSection = styled.section`
  padding: 3rem 0;
  background-color: #000000;
  
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

const MaxWidthContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  
  @media (min-width: 480px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 768px) {
    padding: 0 4vw;
  }
`;

const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  
  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const UnderlineDiv = styled.div`
  width: 4rem;
  height: 0.25rem;
  background-color: #60a5fa;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    width: 6rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) minmax(400px, 2fr);
    gap: 3rem;
    align-items: start;
  }
  
  @media (min-width: 1024px) {
    gap: 4rem;
    grid-template-columns: 350px 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  
  @media (min-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  aspect-ratio: 4/5;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgba(96, 165, 250, 0.2), rgba(168, 85, 247, 0.2));
  border: 1px solid rgba(96, 165, 250, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  overflow: hidden;
  
  @media (min-width: 768px) {
    max-width: 320px;
    border-radius: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  width: 100%;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
    max-width: none;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center; 
  height: 50vh; 
  flex-direction: column;
  gap: 1rem;
  color: #d1d5db;
  line-height: 1.6;
  font-size: 0.95rem;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    line-height: 1.625;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    gap: 3.75rem;
  }
  
  p {
    margin: 0;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

const Highlight = styled.span`
  color: #60a5fa;
  font-weight: 500;
`;

const Highlight2 = styled.span`
  background-color: rgba(96, 165, 250, 0.45);
  padding: 0.1em 0.2em;
  border-radius: 0.2em;
`;

const AboutMe = () => {
  return (
    <AboutSection id="about">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            About Me
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <ContentGrid>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageWrapper>
              <ProfileImage src={User} alt="About Me" />
            </ImageWrapper>
          </ImageContainer>

          <TextContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DescriptionWrapper>
              <p>
                안녕하세요! 저는 <Highlight>미림마이스터고등학교 뉴미디어소프트웨어과</Highlight>에서 <br /><Highlight>프론트엔드 개발</Highlight>을 공부하고 있는 정희진입니다.
              </p>
              <p>
                <Highlight2>프론트엔드 개발</Highlight2>과 <Highlight2>백엔드 개발</Highlight2>을 공부하고 있으며, <br /><Highlight2>아이디어 기획</Highlight2>과 <Highlight2>프론트엔드 개발</Highlight2> 경험을 쌓아왔습니다.
              </p>
              <p>
                개발자로서 <Highlight>소통과 협업</Highlight>을 가장 중요한 가치로 생각합니다. <br /><Highlight2>전공 동아리 부장</Highlight2>으로 활동하며 팀워크를 키웠고, <br />다양한 프로젝트에서 <Highlight2>PM</Highlight2>을 맡아 프로젝트의 전체적인 흐름을 조율해본 경험도 있습니다.
              </p>
            </DescriptionWrapper>
          </TextContent>
        </ContentGrid>
      </MaxWidthContainer>
    </AboutSection>
  );
};

export default AboutMe;