import { motion } from "framer-motion";
import { Monitor, Server, Palette } from "lucide-react";
import styled from 'styled-components';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SkillCategoryCard = styled(motion.div)`
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
  gap: 0.75rem;
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  color: #e2e8f0;
  font-weight: 500;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: rgba(96, 165, 250, 0.3);
  }
`;

const Skills = () => {
  const skills = {
    frontend: {
      title: '프론트엔드',
      icon: Monitor,
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Styled Components'],
      gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)'
    },
    backend: {
      title: '백엔드',
      icon: Server,
      skills: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'Spring Boot'],
      gradient: 'linear-gradient(to right, #22c55e, #10b981)'
    },
    design: {
      title: '디자인',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design'],
      gradient: 'linear-gradient(to right, #a855f7, #ec4899)'
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
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
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