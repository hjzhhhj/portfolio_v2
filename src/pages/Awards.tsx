import { motion } from "framer-motion";
import { Award } from "lucide-react";
import styled from 'styled-components';

const AwardsSection = styled.section`
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

const AwardsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const AwardCard = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: rgba(250, 204, 21, 0.5);
  }
`;

const IconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(to right, #facc15, #f97316);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AwardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
`;

const AwardOrganization = styled.p`
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const AwardDate = styled.p`
  color: #a0a0a0;
`;

const Awards = () => {
  const awards = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `수상명 ${i + 1}`,
    organization: '주최기관',
    date: '2024.12'
  }));

  return (
    <AwardsSection id="awards">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Awards
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <IconWrapper>
                <Award size={48} color="white" />
              </IconWrapper>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardOrganization>{award.organization}</AwardOrganization>
              <AwardDate>{award.date}</AwardDate>
            </AwardCard>
          ))}
        </AwardsGrid>
      </MaxWidthContainer>
    </AwardsSection>
  );
};

export default Awards;