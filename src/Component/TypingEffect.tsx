import { useEffect, useState } from "react";
import './TypingEffect.css';

const TypingEffect = () => {
    const [textContent, setTextContent] = useState("");
    const texts = [
        "의미 있는 일에 코드를 더하는",
        "세상에 긍정적인 변화를 만들고픈",
        "팀의 성장을 이끌어내는"
    ];
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [cooldown, setCooldown] = useState(false); 

    useEffect(() => {
        if (cooldown) return; 

        const type = () => {
            const currentWord = texts[wordIndex];

            setTextContent(currentWord.slice(0, index));

            if (isDeleting) {
                setIndex(prev => prev - 1);

                if (index === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % texts.length);
                    setCooldown(true);
                    setTimeout(() => setCooldown(false), 1000); 
                }
            } else {
                setIndex(prev => prev + 1);

                if (index === currentWord.length) {
                    setCooldown(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setCooldown(false);
                    }, 1500);
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? 100 : 150); 
        return () => clearTimeout(timer);
    }, [index, isDeleting, wordIndex, cooldown]);

    return <div className="typing">{textContent}</div>;
};

export default TypingEffect;
