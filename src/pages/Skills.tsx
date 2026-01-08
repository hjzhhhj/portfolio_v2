import { motion } from "framer-motion";
import styled from "styled-components";

const SkillsSection = styled.section`
  font-family: "Pretendard", sans-serif;
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

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #60a5fa 0%, #5563f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const CategorySubtitle = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
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
  font-size: 1rem;
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
  background: linear-gradient(90deg, #60a5fa 0%, #5563f7 100%);
  border-radius: 0.25rem;
  width: ${(props) => props.$level}%;
`;

const Skills = () => {
  const skills = {
    frontend: {
      title: "Frontend",
      subtitle: "사용자 인터페이스 개발",
      skills: [
        { name: "React", level: 80 },
        { name: "React Native", level: 25 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 60 },
        { name: "HTML/CSS", level: 95 },
        { name: "Styled Components", level: 90 },
      ],
    },
    backend: {
      title: "Backend",
      subtitle: "서버 및 데이터베이스 개발",
      skills: [
        { name: "Flask", level: 65 },
        { name: "Node.js", level: 50 },
        { name: "Express", level: 45 },
        { name: "MongoDB", level: 40 },
        { name: "MySQL", level: 55 },
        { name: "NestJS", level: 55 },
      ],
    },
    design: {
      title: "Tools & Other",
      subtitle: "툴과 이외의 것들",
      skills: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Photoshop", level: 50 },
        { name: "Illustrator", level: 25 },
        { name: "Docker", level: 30 },
      ],
    },
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
          <SectionTitle>Skills</SectionTitle>
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
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategorySubtitle>{category.subtitle}</CategorySubtitle>
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
                      <SkillLevelFill
                        $level={skill.level}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: skillIndex * 0.1 + 0.5,
                        }}
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
