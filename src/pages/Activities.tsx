// Activities.tsx
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Lightbulb, Briefcase, Users, Star } from 'lucide-react'; // 예시 아이콘들

const ActivitiesSection = styled.section`
  padding: 5rem 0;
  background-color: #000000;
  overflow: hidden; /* 오버플로우 숨김 */
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

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #333;
    transform: translateX(-50%);

    @media (max-width: 767px) {
      left: 20px; /* 모바일에서 좌측으로 이동 */
      transform: translateX(0);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }

  /* 원형 아이콘 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #60a5fa;
    border: 3px solid #000000;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media (max-width: 767px) {
      left: 20px;
      transform: translate(-50%, -50%); /* 모바일에서 좌측으로 이동 */
    }
  }

  /* 짝수 번째 아이템 (오른쪽 정렬) */
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .activity-content {
      margin-right: 4rem;
      text-align: right;
    }
    .activity-image {
      margin-left: 0;
      margin-right: 4rem;
      transform-origin: right center; /* 오른쪽에서 시작 */
    }

    @media (max-width: 767px) {
      flex-direction: row; /* 모바일에서는 다시 왼쪽으로 */
      .activity-content {
        margin-left: 4rem;
        margin-right: 0;
        text-align: left;
      }
      .activity-image {
        margin-left: 0;
        margin-right: 0;
        transform-origin: center center;
      }
    }
  }

  /* 홀수 번째 아이템 (왼쪽 정렬) */
  &:nth-child(odd) {
    .activity-content {
      margin-left: 4rem;
      text-align: left;
    }
    .activity-image {
      margin-right: 0;
      margin-left: 4rem;
      transform-origin: left center; /* 왼쪽에서 시작 */
    }

    @media (max-width: 767px) {
      .activity-content {
        margin-left: 4rem; /* 모바일에서 좌측 유지 */
        margin-right: 0;
      }
      .activity-image {
        margin-left: 0;
        margin-right: 0;
        transform-origin: center center;
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: row; /* 모바일에서는 모두 왼쪽으로 정렬 */
    justify-content: flex-start;
    padding-left: 40px; /* 타임라인 선 때문에 안쪽으로 */

    .activity-content {
      width: 100%;
      box-sizing: border-box;
      margin: 0 !important; /* 이전 마진 초기화 */
      padding-left: 1rem; /* 이미지와의 간격 */
    }

    .activity-image {
      flex-shrink: 0;
      width: 120px; /* 모바일 이미지 크기 조정 */
      height: 67.5px; /* 16:9 비율 유지 */
      margin-right: 1rem; /* 텍스트와의 간격 */
      margin-left: 0 !important; /* 이전 마진 초기화 */
    }
  }
`;

const ActivityImage = styled.div`
  width: 250px; 
  height: 140.625px; 
  background-color: #333; 
  border-radius: 0.75rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4a4a4a;
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ActivityContent = styled.div`
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #4a4a4a;
  flex-grow: 1; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${TimelineItem}:hover & {
    border-color: rgba(96, 165, 250, 0.5);
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const ActivityPeriod = styled.p`
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
`;

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: '첫 번째 활동',
      period: '2024.01 - 2024.03',
      description: '이 활동은 저의 첫 번째 중요한 경험입니다. 여기서는 기본적인 기술을 익히고 팀워크의 중요성을 배웠습니다.',
      image: 'https://via.placeholder.com/250x141/0000FF/FFFFFF?text=Activity+1', // 16:9 비율 이미지 URL
      icon: Lightbulb
    },
    {
      id: 2,
      title: '두 번째 활동',
      period: '2024.04 - 2024.06',
      description: '이 활동을 통해 실제 프로젝트에 참여하며 문제를 해결하는 능력을 키웠습니다. 어려운 도전이었지만 많은 것을 배웠습니다.',
      image: 'https://via.placeholder.com/250x141/FF0000/FFFFFF?text=Activity+2',
      icon: Briefcase
    },
    {
      id: 3,
      title: '세 번째 활동',
      period: '2024.07 - 2024.09',
      description: '협업 프로젝트에서 리더 역할을 맡아 팀을 이끌었습니다. 소통과 리더십 능력을 향상시키는 계기가 되었습니다.',
      image: 'https://via.placeholder.com/250x141/00FF00/FFFFFF?text=Activity+3',
      icon: Users
    },
    {
      id: 4,
      title: '네 번째 활동',
      period: '2024.10 - 2024.12',
      description: '가장 최근의 활동으로, 심화된 기술을 적용하여 혁신적인 솔루션을 개발했습니다. 큰 성과를 달성했습니다.',
      image: 'https://via.placeholder.com/250x141/FFFF00/000000?text=Activity+4',
      icon: Star
    },
  ];

  return (
    <ActivitiesSection id="activities">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Activities
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <TimelineContainer>
          {activities.map((activity, index) => (
            <TimelineItem
              key={activity.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }} 
            >
              <ActivityImage className="activity-image">
                <img src={activity.image} alt={activity.title} />
              </ActivityImage>
              <ActivityContent className="activity-content">
                <ActivityTitle>{activity.title}</ActivityTitle>
                <ActivityPeriod>{activity.period}</ActivityPeriod>
                <ActivityDescription>
                  {activity.description}
                </ActivityDescription>
              </ActivityContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </MaxWidthContainer>
    </ActivitiesSection>
  );
};

export default Activities;