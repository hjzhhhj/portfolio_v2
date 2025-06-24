import { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #60a5fa; }
`;

const TypingSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #60a5fa;
  display: inline;
  vertical-align: baseline;
  animation: ${blink} 0.75s step-end infinite;
  color: #60a5fa; 
`;

const TypingEffect = () => {
    const texts = [
        "의미 있는 일에 코드를 더하는",
        "세상에 긍정적인 변화를 만들고픈",
        "팀의 성장을 이끌어내는"
    ];

    const [textContent, setTextContent] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [cooldown, setCooldown] = useState(false);

    useEffect(() => {
        if (cooldown) return;

        const currentWord = texts[wordIndex];

        const updateText = () => {
            if (isDeleting) {
                const updatedText = currentWord.slice(0, index - 1);
                setTextContent(updatedText);
                setIndex(prev => prev - 1);

                if (index <= 1) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % texts.length);
                    setCooldown(true);
                    setTimeout(() => setCooldown(false), 1000);
                }
            } else {
                const updatedText = currentWord.slice(0, index + 1);
                setTextContent(updatedText);
                setIndex(prev => prev + 1);

                if (index + 1 === currentWord.length) {
                    setCooldown(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setCooldown(false);
                    }, 1500);
                }
            }
        };

        const timer = setTimeout(updateText, isDeleting ? 100 : 150);
        return () => clearTimeout(timer);
    }, [index, isDeleting, wordIndex, cooldown, texts]);

    return (
        <TypingSpan>
            {textContent}
        </TypingSpan>
    );
};

export default TypingEffect;