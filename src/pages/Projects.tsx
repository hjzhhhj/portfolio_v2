import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styled from 'styled-components';

const ProjectsSection = styled.section`
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
  flex-shrink: 0; /* 이미지가 줄어들지 않도록 */
  width: 50%; /* 컨테이너 너비의 절반 */
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background-color: #333; /* 이미지 없을 때 배경색 */
  border-radius: 1rem;
  overflow: hidden; /* 이미지 넘치는 부분 숨김 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4a4a4a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 잘리지 않고 채워지도록 */
  }

  @media (max-width: 991px) {
    width: 100%; /* 모바일에서 너비 100% */
  }
`;

const ProjectContent = styled.div`
  flex-grow: 1; /* 남은 공간 채우기 */
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
    justify-content: flex-end; /* 짝수번째는 태그 오른쪽 정렬 */
    @media (max-width: 991px) {
      justify-content: center; /* 모바일에서 가운데 정렬 */
    }
  }
  ${ProjectItem}:nth-child(odd) & {
    justify-content: flex-start; /* 홀수번째는 태그 왼쪽 정렬 */
    @media (max-width: 991px) {
      justify-content: center; /* 모바일에서 가운데 정렬 */
    }
  }
`;

const Tag = styled.span`
  background-color: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 9999px; /* pill shape */
  font-size: 0.875rem;
  white-space: nowrap;
`;

const ProjectActions = styled.div`
  display: flex;
  margin-top: 1.5rem; /* 태그 목록과 버튼 사이 간격 */
  gap: 1rem;

  ${ProjectItem}:nth-child(even) & {
    justify-content: flex-end; /* 짝수번째는 버튼 오른쪽 정렬 */
    @media (max-width: 991px) {
      justify-content: center; /* 모바일에서 가운데 정렬 */
    }
  }
  ${ProjectItem}:nth-child(odd) & {
    justify-content: flex-start; /* 홀수번째는 버튼 왼쪽 정렬 */
    @media (max-width: 991px) {
      justify-content: center; /* 모바일에서 가운데 정렬 */
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
      title: '포트폴리오 웹사이트',
      description: '개인 포트폴리오를 위한 반응형 웹사이트입니다. React와 Styled-components를 사용하여 개발되었으며, 저의 기술 스택과 프로젝트 경험을 소개합니다.',
      tags: ['React', 'Styled-components', 'Framer Motion'],
      image: 'https://via.placeholder.com/640x360/60A5FA/FFFFFF?text=Project+1', // 16:9 이미지
      github: 'https://github.com/your-username/portfolio',
      demo: 'https://your-portfolio-demo.com'
    },
    {
      id: 2,
      title: '온라인 쇼핑몰 백엔드',
      description: 'Node.js와 Express를 기반으로 구축된 온라인 쇼핑몰 백엔드 시스템입니다. 사용자 인증, 상품 관리, 주문 처리 기능을 포함합니다.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://via.placeholder.com/640x360/10B981/FFFFFF?text=Project+2',
      github: 'https://github.com/your-username/ecommerce-backend',
      demo: null
    },
    {
      id: 3,
      title: '모바일 앱 (React Native)',
      description: 'React Native를 활용하여 개발된 모바일 애플리케이션입니다. 크로스 플랫폼 지원을 통해 iOS와 Android에서 모두 사용 가능합니다.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: 'https://via.placeholder.com/640x360/EF4444/FFFFFF?text=Project+3',
      github: 'https://github.com/your-username/mobile-app',
      demo: 'https://your-mobile-app-demo.com'
    },
    {
      id: 4,
      title: '데이터 시각화 대시보드',
      description: 'Python의 Dash 라이브러리를 사용하여 구현된 대화형 데이터 시각화 대시보드입니다. 복잡한 데이터를 직관적으로 분석하고 이해할 수 있도록 돕습니다.',
      tags: ['Python', 'Dash', 'Plotly', 'Pandas'],
      image: 'https://via.placeholder.com/640x360/3B82F6/FFFFFF?text=Project+4',
      github: 'https://github.com/your-username/data-dashboard',
      demo: null
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