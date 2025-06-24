import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import styled, { keyframes } from 'styled-components';
import TypingEffect from "../Component/TypingEffect";

const AllContainer = styled.div`
`;

const IntroduceSection = styled.div`
  display: flex;
  margin-top: 17.5rem;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 7.5vw;
  position: relative;
`;

const HiText = styled.p`
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 700;
  word-break: break-word;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.p`
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(1.75rem, 3vw, 3rem);
  font-weight: 700;
  word-break: break-word;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

const MottoText = styled.p`
  color: rgb(170, 170, 170);
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-top: 1.75rem;
  font-weight: 400;
`;

const slideLine = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

const MoreButtonWrapper = styled.div`
  margin-top: 11.25rem;
  position: relative;
  text-align: center;
`;

const MoreButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  font-size: 1rem;
  border-radius: 0.625rem;
  cursor: pointer;
  background-color: black;
  color: white;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 30px;
    background-color: white;
    margin: 0.625rem auto 0;
    animation: ${slideLine} 2s infinite;
    opacity: 0;
  }
`;

function Introduce() {
    return (
        <AllContainer>
            <IntroduceSection>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
                >
                    <HiText>안녕하세요!</HiText>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                >
                    <MainText>
                        <TypingEffect />&nbsp;개발자, 정희진입니다
                    </MainText>
                    <MottoText>네가 세상에서 보고 싶은 변화가 되어라 – 마하트마 간디</MottoText>
                </motion.div>
                <MoreButtonWrapper>
                    <Link to="about" smooth={true} duration={800} offset={-70}>
                        <MoreButton>더보기</MoreButton>
                    </Link>
                </MoreButtonWrapper>
            </IntroduceSection>
        </AllContainer>
    );
}

export default Introduce;