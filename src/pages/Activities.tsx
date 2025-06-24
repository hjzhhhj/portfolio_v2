import { motion } from "framer-motion";
import styled, { keyframes } from 'styled-components';

const ActivitiesSection = styled.section`
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

const ActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ActivityCard = styled(motion.div)`
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
    transform: translateY(-0.5rem);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(96, 165, 250, 0.1), rgba(168, 85, 247, 0.1));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ActivityContent = styled.div`
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
`;

const ActivityPeriod = styled.p`
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  color: #d1d5db;
  line-height: 1.625;
  font-size: 1.125rem;
`;

const Activities = () => {
  const activities = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `활동 ${i + 1}`,
    period: '2024.01 - 2024.12',
    description: '활동에 대한 상세한 설명을 여기에 작성해주세요. 어떤 역할을 했는지, 어떤 성과를 얻었는지 등을 포함해주세요.'
  }));

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

        <ActivitiesList>
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <ActivityContent>
                <ActivityTitle>{activity.title}</ActivityTitle>
                <ActivityPeriod>{activity.period}</ActivityPeriod>
                <ActivityDescription>
                  {activity.description}
                </ActivityDescription>
              </ActivityContent>
            </ActivityCard>
          ))}
        </ActivitiesList>
      </MaxWidthContainer>
    </ActivitiesSection>
  );
};

export default Activities;