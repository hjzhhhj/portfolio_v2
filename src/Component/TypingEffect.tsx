import { useEffect, useState } from "react";
import './TypingEffect.css';

const TypingEffect = () => {
    const [textContent, setTextContent] = useState("");
    const texts = ["Designer", "Developer"]; // Array of words
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0); // To track which word is being typed

    useEffect(() => {
        const type = () => {
            setTextContent(texts[wordIndex].slice(0, index));

            if (isDeleting) {
                setIndex((prev) => prev - 1);
                if (index === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % texts.length); // Move to next word
                }
            } else {
                setIndex((prev) => prev + 1);
                if (index === texts[wordIndex].length) {
                    setIsDeleting(true);
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? 100 : 200);
        return () => clearTimeout(timer);
    }, [index, isDeleting, wordIndex]);

    return <div className="typing">{textContent}</div>;
};

export default TypingEffect;
