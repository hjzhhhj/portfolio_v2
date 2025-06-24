import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import styled from 'styled-components';

const ContactSection = styled.section`
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
  margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ContactCard = styled(motion.div)`
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #4a4a4a;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
  }
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

const ContactLabel = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: white;
`;

const ContactValue = styled.p`
  color: #d1d5db;
  word-break: break-all;
`;


const Contact = () => {
  const contacts = [
    { icon: Github, label: 'GitHub', value: 'github.com/hjzhhhj', gradient: 'linear-gradient(to right, #4b5563, #1f2937)' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/hjzhhhj', gradient: 'linear-gradient(to right, #2563eb, #1e40af)' },
    { icon: Mail, label: 'Email', value: 'jhj090120@gmail.com', gradient: 'linear-gradient(to right, #dc2626, #db2777)' },
    { icon: Phone, label: 'Phone', value: '010-6283-7513', gradient: 'linear-gradient(to right, #16a34a, #059669)' }
  ];

  return (
    <ContactSection id="contact">
      <MaxWidthContainer>
        <TitleContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Contact
          </SectionTitle>
          <UnderlineDiv></UnderlineDiv>
        </TitleContainer>

        <ContactGrid>
          {contacts.map(({ icon: Icon, label, value, gradient }, index) => (
            <ContactCard
              key={label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <IconWrapper $gradient={gradient}>
                <Icon size={40} color="white" />
              </IconWrapper>
              <ContactLabel>{label}</ContactLabel>
              <ContactValue>{value}</ContactValue>
            </ContactCard>
          ))}
        </ContactGrid>
      </MaxWidthContainer>
    </ContactSection>
  );
};

export default Contact;