import { motion } from "framer-motion";
import { Monitor, Server, Palette } from "lucide-react";
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: #000000;
`;

const MaxWidthContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem; 
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
  justify-items: center; 

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
  }
`;

const SkillCategoryCard = styled(motion.div)`
  width: 100%;
  max-width: 320px; 
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
  gap: 1.5rem;
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
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'React', level: 70 },
        { name: 'React Native', level: 25 },
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Styled Components', level: 90 }
      ],
    },
    backend: {
      title: 'Backend',
      icon: Server,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Python', level: 50 },
        { name: 'Java', level: 70 },
        { name: 'Kotlin', level: 20 },
        { name: 'C', level: 30 },
        { name: 'MySQL', level: 25 }
      ],
    },
    design: {
      title: 'Design',
      icon: Palette,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: [
        { name: 'Figma', level: 55 },
        { name: 'Photoshop', level: 50 },
        { name: 'Illustrator', level: 35 }
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