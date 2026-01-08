import { motion } from "framer-motion";
import styled from "styled-components";
import { Lightbulb, Briefcase, Users, Star } from "lucide-react";

const ActivitiesSection = styled.section`
  font-family: "Pretendard", sans-serif;
  padding: 5rem 0;
  background-color: #000000;
  overflow: hidden;
`;

const MaxWidthContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const UnderlineDiv = styled.div`
  width: 6rem;
  height: 0.25rem;
  background-color: #60a5fa;
  margin: 0 auto;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #333;
    transform: translateX(-50%);

    @media (max-width: 767px) {
      left: 20px;
      transform: translateX(0);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4rem;
  position: relative;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #60a5fa;
    border: 3px solid #000000;
    transform: translate(-50%, -50%);
    z-index: 2;

    @media (max-width: 767px) {
      left: 20px;
      top: 50px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    column-gap: 48px;
    align-items: flex-start;

    &::after {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:nth-child(odd) {
      .activity-image {
        grid-column: 1;
        justify-self: end;
      }
      .activity-content {
        grid-column: 3;
        justify-self: start;
      }
    }

    &:nth-child(even) {
      .activity-image {
        grid-column: 3;
        grid-row: 1;
        justify-self: start;
        margin-left: 25px;
      }
      .activity-content {
        grid-column: 1;
        grid-row: 1;
        justify-self: end;
        margin-right: 25px;
      }
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 40px;
    gap: 1rem;

    .activity-image {
      width: 100%;
      max-width: 300px;
      height: auto;
      aspect-ratio: 16/9;
    }

    .activity-content {
      width: 100%;
      text-align: left;
    }
  }
`;

const ActivityContent = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #4a4a4a;
  flex-grow: 1;
  min-height: 200px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${TimelineItem}:hover & {
    border-color: rgba(96, 165, 250, 0.5);
  }

  @media (max-width: 767px) {
    max-width: 100%;
    min-height: auto;
    padding: 1.25rem;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 1.1rem;
    white-space: normal;
    line-height: 1.4;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const ActivityPeriod = styled.p`
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (max-width: 767px) {
    font-size: 0.85rem;
  }
`;

const ActivityDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.95rem;

  @media (max-width: 767px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Microsoft Empowerment Project 교육 이수",
      period: "2024.04 ~ 2024.08",
      description:
        "클라우드 기술과 AI 서비스 실습, Azure 기반 머신러닝 모델 학습.",
      icon: Lightbulb,
    },
    {
      id: 2,
      title: "Yeep 창업경진대회 본선 진출",
      period: "2024.05 ~ 2024.09",
      description: "비즈니스 모델 설계 및 MVP 개발을 통한 창업 경험.",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "교내 창의 아이디어 경진대회 참여",
      period: "2024.06",
      description: "창의적 아이디어 구체화 및 발표 역량 향상.",
      icon: Users,
    },
    {
      id: 4,
      title: "중앙대학교 Be Curious! AI 트랙 교육 이수",
      period: "2024.07 - 2024.08",
      description: "딥러닝, 자연어처리, 데이터 분석 중심의 AI 심화 과정.",
      icon: Star,
    },
    {
      id: 5,
      title: "미림 소프트웨어 챌린지",
      period: "2024.08 - 2024.09",
      description: "문제 해결 중심의 소프트웨어 프로젝트 수행.",
      icon: Star,
    },
    {
      id: 6,
      title: "청소년 디지털서비스 아이디어 공모전",
      period: "2024.08 - 2024.09",
      description: "혁신적 사용자 경험을 고려한 디지털 서비스 기획.",
      icon: Star,
    },
    {
      id: 7,
      title: "피우다 프로젝트",
      period: "2024.09 - 2024.10",
      description: "사회적 가치를 고려한 프로젝트 개발 및 사용자 피드백 적용.",
      icon: Star,
    },
    {
      id: 8,
      title: "미림 해커톤",
      period: "2024.10.18 - 2024.10.19",
      description: "아이디어부터 개발까지 전 과정 경험.",
      icon: Star,
    },
    {
      id: 9,
      title: "AI 신한은행 아이디어톤",
      period: "2024.10 - 2024.11",
      description: "AI 기반 금융 서비스 모델 기획.",
      icon: Star,
    },
    {
      id: 10,
      title: "고교생 해커톤 AppJam 28회 장려상",
      period: "2024.12.21 - 2024.12.22",
      description: "전국 해커톤 참가, 실사용자 중심 기능 개발.",
      icon: Star,
    },
    {
      id: 11,
      title: "고교생 해커톤 AppJam 29회 최우수상",
      period: "2025.02.08 - 2025.02.09",
      description: "이전 경험을 바탕으로 개선된 프로젝트 개발.",
      icon: Star,
    },
    {
      id: 12,
      title: "전공동아리 MAS 부장 위임",
      period: "2025.03 ~",
      description: "동아리 운영 리더십 및 프로젝트 기획/관리 수행.",
      icon: Star,
    },
    {
      id: 13,
      title: "2025 AI Youth Challenge 참여 ",
      period: "2025.04.02 - 2025.06.01",
      description: "프로젝트 기획/관리 수행",
      icon: Star,
    },
    {
      id: 14,
      title: "IT Show 출품작 인사 챌린지 기획 및 개발",
      period: "2025.03.09 - 2025.06.19",
      description: "프로젝트 기획/관리 수행",
      icon: Star,
    },
    {
      id: 15,
      title: "Google AI ESG School 교육 이수",
      period: "2025.04.06 - 2025.06.21",
      description: "음성인식과 자연어처리 교육 이수",
      icon: Star,
    },
    {
      id: 16,
      title: "Google Study Jam 수료",
      period: "2025.04.01 ~ 2025.06.08",
      description: "Google Cloub를 활용한 다양한 실습 및 강의 시청",
      icon: Star,
    },
    {
      id: 17,
      title: "교내 창업 아이템 경진대회",
      period: "2025.05.20 ~ 2025.06.20",
      description: "창의적 아이템 구체화 및 발표 역량 향상.",
      icon: Star,
    },
    {
      id: 18,
      title: "교내 창업 아이디어 경진대회",
      period: "2025.05.28 ~ 2025.06.23",
      description: "창의적 아이디어 구체화 및 발표 역량 향상.",
      icon: Star,
    },
    {
      id: 19,
      title: "교고생 해커톤 U/THON 25 기획 및 개발, 최우수상",
      period: "2025.06.14 - 2025.06.15",
      description: "팀 리더로서 아이디어 구상부터 개발까지 주도.",
      icon: Star,
    },
    {
      id: 20,
      title: "미림 해커톤 기획 및 FE 개발, 은상",
      period: "2025.06.21 - 2025.06.22",
      description: "사용자 경험을 고려한 프론트엔드 개발 담당.",
      icon: Star,
    },
    {
      id: 21,
      title: "소프트웨어 챌린지 도파민 브레이커 개발",
      period: "2025.07 - 2025.08",
      description: "팀원들과 협력하여 문제 해결형 소프트웨어 개발.",
      icon: Star,
    },
    {
      id: 22,
      title: "테크폴리오 경진대회 최우수상",
      period: "2025.08 - 2025.09",
      description: "혁신적인 기술 포트폴리오 제작 및 발표.",
      icon: Star,
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
          <SectionTitle>Activities</SectionTitle>
          <UnderlineDiv />
        </TitleContainer>

        <TimelineContainer>
          {activities.map((activity, index) => (
            <TimelineItem
              key={activity.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
