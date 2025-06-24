import { motion } from "framer-motion";
import styled from 'styled-components';
import User from "../Assets/Me.png";

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #000000;
`;

const MaxWidthContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 4vw;
`;

const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const UnderlineDiv = styled.div`
  width: 6rem;
  height: 0.25rem;
  background-color: #60a5fa;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 24rem auto;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const ImageContainer = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 24rem;
  height: 30rem;
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
  background: linear-gradient(to bottom right, rgba(96, 165, 250, 0.2) , rgba(168, 85, 247, 0.2));
  border: 1px solid rgba(96, 165, 250, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
  max-width: 45rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #d1d5db;
  line-height: 1.625;
  font-size: 1.125rem;
`;

const Highlight = styled.span`
  color: #60a5fa;
  font-weight: 500;
`;

const Highlight2 = styled.span`
  background-color:rgba(96, 165, 250, 0.45);
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DescriptionWrapper>
              <p>
                안녕하세요! 저는 <Highlight>미림마이스터고등학교 뉴미디어소프트웨어과</Highlight>에서 <br />
                <Highlight>프론트엔드 개발</Highlight>을 공부하고 있는 정희진입니다.
              </p>
              <p>
                <Highlight2>프론트엔드 개발</Highlight2>과 <Highlight2>백엔드 개발</Highlight2>을 공부하고 있으며, <br />
                <Highlight2>아이디어 기획</Highlight2>과 <Highlight2>프론트엔드 개발</Highlight2> 경험을 쌓아왔습니다.
              </p>
              <p>
                개발자로서 <Highlight>소통과 협업</Highlight>을 가장 중요한 가치로 생각합니다.<br />
                <Highlight2>전공 동아리 부장</Highlight2>으로 활동하며 팀워크를 키웠고,<br />
                다양한 프로젝트에서 <Highlight2>PM</Highlight2>을 맡아 프로젝트의 전체적인 흐름을 조율해본 경험도 있습니다.
              </p>
            </DescriptionWrapper>
          </TextContent>
        </ContentGrid>
      </MaxWidthContainer>
    </AboutSection>
  );
};

export default AboutMe;