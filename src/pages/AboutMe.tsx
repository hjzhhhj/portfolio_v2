import { motion } from "framer-motion";
import styled from 'styled-components';
import User from "../Assets/Me.png";

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #000000;
`;

const MaxWidthContainer = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
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

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ImageContainer = styled(motion.div)`
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  margin-left: auto;
  margin-right: auto;
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

const ImageCaption = styled.p`
  color: #a0a0a0;
  font-size: 0.875rem;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #d1d5db;
  line-height: 1.625;
  font-size: 1.125rem;
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
            <ImageCaption>여기에 실제 사진을 넣어주세요</ImageCaption>
          </ImageContainer>
          
          <TextContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Subtitle>안녕하세요!</Subtitle>
            <DescriptionWrapper>
              <p>
                저는 새로운 기술을 배우고 적용하는 것을 좋아하는 개발자입니다.
                사용자 경험을 중시하며, 깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
              </p>
              <p>
                프론트엔드부터 백엔드까지 풀스택 개발 경험을 바탕으로
                다양한 프로젝트에 참여하며 실력을 키워나가고 있습니다.
              </p>
              <p>
                팀워크를 중시하며, 새로운 도전을 두려워하지 않는 개발자가 되고 싶습니다.
              </p>
            </DescriptionWrapper>
          </TextContent>
        </ContentGrid>
      </MaxWidthContainer>
    </AboutSection>
  );
};

export default AboutMe;