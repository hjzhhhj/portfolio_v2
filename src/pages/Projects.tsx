import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: calc(16 / 9 * 100%);
  position: relative;
  background: linear-gradient(to bottom right, rgba(96, 165, 250, 0.2), rgba(168, 85, 247, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #4a4a4a;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #60a5fa;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: white;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: rgba(37, 99, 235, 0.2);
  color: #60a5fa;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
`;

const ExternalLinkButton = styled(motion.button)`
  padding: 0.5rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.75rem;
  transition: background-color 0.3s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
  }
`;

const Projects = () => {
  const projects = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `프로젝트 ${i + 1}`,
    description: '프로젝트에 대한 간단한 설명을 여기에 작성해주세요. 사용된 기술 스택과 주요 기능들을 포함해주세요.',
    tags: ['React', 'Node.js', 'MongoDB']
  }));

  return (
    <ProjectsSection id="projects">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Projects
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <ImagePlaceholder>
                <Briefcase size={48} />
              </ImagePlaceholder>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <ProjectFooter>
                  <TagList>
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>
                        {tag}
                      </Tag>
                    ))}
                  </TagList>
                  <ExternalLinkButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </ExternalLinkButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </MaxWidthContainer>
    </ProjectsSection>
  );
};

export default Projects;