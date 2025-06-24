// Skills.tsx
import { motion } from "framer-motion";
import { Monitor, Server, Palette } from "lucide-react";
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: #000000;
`;

const MaxWidthContainer = styled.div`
  max-width: 1200px; /* <-- 이 값을 960px에서 1200px로 변경했습니다. */
  margin-left: auto;
  margin-right: auto;
  padding: 0 4vw; /* <-- 이 값을 0 1.5rem에서 0 4vw로 변경했습니다. */
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

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem; /* 이 값은 이미 4rem으로 설정되어 있습니다. */
  }
`;

const SkillCategoryCard = styled(motion.div)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
  }
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div<{ $gradient: string }>`
  width: 5rem;
  height: 5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $gradient }) => $gradient};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 이 값은 개별 스킬 항목 간의 세로 간격입니다. */
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: left;
  color: #e2e8f0;
  font-weight: 500;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.3);
  }
`;

const SkillName = styled.span`
  margin-bottom: 0.5rem;
`;

const SkillLevelBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: rgba(96, 165, 250, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
`;

const SkillLevelFill = styled(motion.div)<{ $level: number }>`
  height: 100%;
  background-color: #60a5fa;
  border-radius: 0.25rem;
  width: ${props => props.$level}%;
`;

const Skills = () => {
  const skills = {
    frontend: {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        { name: 'React', level: 90 },
        { name: 'React Native', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Styled Components', level: 80 }
      ],
    },
    backend: {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'Kotlin', level: 60 },
        { name: 'C', level: 50 },
        { name: 'MySQL', level: 75 }
      ],
    },
    design: {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Photoshop', level: 70 },
        { name: 'Illustrator', level: 65 }
      ],
    }
  };

  return (
    <SkillsSection id="skills">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Skills
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <SkillsGrid>
          {Object.entries(skills).map(([key, category], index) => (
            <SkillCategoryCard
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <CategoryHeader>
                <IconWrapper $gradient={category.gradient}>
                  <category.icon size={40} color="white" />
                </IconWrapper>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevelBar>
                      <SkillLevelFill $level={skill.level} 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </SkillLevelBar>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategoryCard>
          ))}
        </SkillsGrid>
      </MaxWidthContainer>
    </SkillsSection>
  );
};

export default Skills;