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
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const UnderlineDiv = styled.div`
  width: 8rem;
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
  height: 25rem;
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

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
          </ImageContainer>
          
          <TextContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DescriptionWrapper>
              <p>
                저는 미림마이스터고등학교 뉴미디어소프트웨어과에서 프론트엔드 개발을 공부하고 있는 정희진입니다.
                개발자로서 소통과 협업을 가장 중요한 가치로 생각하며,
                혼자 해결하는 것보다 팀원들과 생각을 나누고 함께 방향을 잡아가는 과정에서 더 나은 결과가 나온다고 생각합니다.
              </p>
              <p>
                전공 동아리 부장으로 활동하며 다양한 사람들과 협업하며 팀워크를 키웠고,
                다양한 프로젝트에서 PM으로서의 역할을 수행하며 프로젝트의 목표 설정, 일정 조율, 문제 해결까지 전체적인 흐름을 조율해본 경험도 있습니다.
                항상 사용자의 입장에서 생각하려고 노력하며, 팀과 함께 더 나은 결과를 만들기 위해 고민하는 개발자가 되고자 합니다.
              </p>
              <p>
                또한, 저는 꾸준한 학습과 시간 관리를 통해 기술적인 역량을 키우고 있습니다.
                새로운 기술에 대한 열정을 가지고, 문제를 해결하는 과정에서 얻은 경험과 교훈을 바탕으로 계속 발전하려고 노력합니다.
                때로는 더 나은 해결책을 찾기 위해 실험적 접근을 시도하기도 하고, 그 과정에서 성취감을 느끼며 성장하고 있습니다.
              </p>
              <p>
                제 목표는 협업을 통해 서로의 역량을 강화하며, 더 나은 결과를 만들어내는 것입니다.
                그동안 다양한 프로젝트를 통해 팀워크의 중요성을 깨달았고, 앞으로도 팀원들과 함께 협력하며 목표를 이루는 경험을 계속 쌓아가고 싶습니다.
                끊임없이 배우고 성장하는 개발자가 되어, 더 큰 가치를 창출하는 데 기여하고 싶습니다.
              </p>
            </DescriptionWrapper>
          </TextContent>
        </ContentGrid>
      </MaxWidthContainer>
    </AboutSection>
  );
};

export default AboutMe;