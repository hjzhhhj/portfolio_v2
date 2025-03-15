import { useEffect, useState } from "react";

const TypingEffect = () => {
    const [textContent, setTextContent] = useState("");
    const text = "Hello, this is a typing effect!";
    let i = 0;
    let isDeleting = false;

    useEffect(() => {
        const type = () => {
            setTextContent((prevText) => text.slice(0, i));

            if (isDeleting) {
                i--;
                if (i === 0) {
                    isDeleting = false;
                }
            } else {
                i++;
                if (i === text.length) {
                    isDeleting = true;
                }
            }

            setTimeout(type, isDeleting ? 100 : 200);
        };

        type();
    }, []);

    return <div className="typing">{textContent}</div>;
};

export default TypingEffect;
