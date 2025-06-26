import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styled from 'styled-components';

const ProjectsSection = styled.section`
  font-family: 'Pretendard', sans-serif;
  padding: 5rem 0;
  background-color: #000000;
  overflow: hidden;
`;

const MaxWidthContainer = styled.div`
  max-width: 1200px; 
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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem; 
`;

const ProjectItem = styled(motion.div)<{ $isEven: boolean }>`
  display: flex;
  flex-direction: ${props => props.$isEven ? 'row-reverse' : 'row'}; 
  align-items: center;
  gap: 3rem;
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
    transform: translateY(-5px);
  }

  @media (max-width: 991px) { 
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;

    .project-image-container, .project-content {
      margin: 0 !important;
    }
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0; 
  width: 50%; 
  aspect-ratio: 16 / 9; 
  background-color: #333; 
  border-radius: 1rem;
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4a4a4a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.75rem;

  @media (max-width: 767px) {
    font-size: 1.75rem;
  }
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;

  ${ProjectItem}:nth-child(even) & {
    justify-content: flex-end; 
    @media (max-width: 991px) {
      justify-content: center;
    }
  }
  ${ProjectItem}:nth-child(odd) & {
    justify-content: flex-start; 
    @media (max-width: 991px) {
      justify-content: center; 
    }
  }
`;

const Tag = styled.span`
  background-color: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  white-space: nowrap;
`;

const ProjectActions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;

  ${ProjectItem}:nth-child(even) & {
    justify-content: flex-end; 
    @media (max-width: 991px) {
      justify-content: center;
    }
  }
  ${ProjectItem}:nth-child(odd) & {
    justify-content: flex-start; 
    @media (max-width: 991px) {
      justify-content: center;
    }
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #60a5fa;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b82f6;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '편잇',
      description: '고교생 해커톤 APPJAM 28회에서 진행한 편의점 꿀 정보를 한번에 볼 수 있는 서비스입니다. 기획과 FE 개발을 담당하였고, 팀장을 맡아 주도적으로 이끌어나갔습니다.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/Assets/pj1.png', 
      github: 'https://github.com/hjzhhhj/AppJam28th',
      demo: null
    },
    {
      id: 2,
      title: '스피킷',
      description: '고교생 해커톤 APPJAM 29회에서 진행한 발표를 압도적으로 편안하게 도와주는 서비스입니다. 기획과 FE 개발을 담당하였고, 팀장을 맡아 주도적으로 이끌어나갔습니다.',
      tags: ['React Native', 'OpenAI', 'Speech Recognition', 'Java'],
      image: '/Assets/pj2.png',
      github: 'https://github.com/29-appjam',
      demo: null
    },
    {
      id: 3,
      title: 'PortFolio',
      description: '현재 보고 계시는 개인 프로젝트로 진행한 포트폴리오 사이트입니다.',
      tags: ['React', 'TypeScript', 'Styled Components', 'Framer Motion', 'Lucide'],
      image: '/Assets/pj5.png',
      github: 'https://github.com/hjzhhhj/Portfolio_v2',
      demo: null
    },
    {
      id: 4,
      title: 'SIGNAL',
      description: '개인 프로젝트로 진행한 미림인의 친화력을 증진해주는 서비스입니다. 기획과 FE & BE 개발을 담당하였습니다.',
      tags: ['HTML', 'CSS', 'Flask'],
      image: '/Assets/pj3.png',
      github: 'https://github.com/hjzhhhj/SIGNAL',
      demo: null
    },
    {
      id: 5,
      title: 'SCHOK',
      description: '개인 프로젝트로 진행한 속초 중고등학생에게 정보를 제공해주는 서비스입니다. 기획과 FE 개발을 담당하였습니다.',
      tags: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
      image: '/Assets/pj4.png',
      github: 'https://github.com/hjzhhhj/SCHOK',
      demo: null
    },
    {
      id: 6,
      title: '인스타 급식 알리미',
      description: '개인 프로젝트로 진행한 속초고등학교의 급식을 매일 0시 0분에 각 인스타 스토리에 알려주는 서비스입니다.',
      tags: ['Python'],
      image: '/Assets/pj6.png',
      github: 'https://github.com/hjzhhhj/Sokgo_Today',
      demo: 'https://www.instagram.com/sokgo_today/'
    },
    {
      id: 7,
      title: '인스타 급식 알리미',
      description: '개인 프로젝트로 진행한 고성중 • 고등학교의 급식을 매일 0시 0분에 각 인스타 스토리에 알려주는 서비스입니다.',
      tags: ['Python'],
      image: '/Assets/pj6.png',
      github: 'https://github.com/hjzhhhj/GMHS_TODAY',
      demo: 'https://www.instagram.com/gmhs_today/'
    }
  ];

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

        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              $isEven={index % 2 !== 0} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ImageContainer className="project-image-container">
                <img src={project.image} alt={project.title} />
              </ImageContainer>
              <ProjectContent className="project-content">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <TagList>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>
                      {tag}
                    </Tag>
                  ))}
                </TagList>
                <ProjectActions>
                  {project.github && (
                    <LinkButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub <ExternalLink size={16} />
                    </LinkButton>
                  )}
                  {project.demo && (
                    <LinkButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demo <ExternalLink size={16} />
                    </LinkButton>
                  )}
                </ProjectActions>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectList>
      </MaxWidthContainer>
    </ProjectsSection>
  );
};

export default Projects;