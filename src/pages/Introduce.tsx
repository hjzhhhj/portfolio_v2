import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import "./Introduce.css";
import TypingEffect from "../Component/TypingEffect";

function Introduce() {
    return (
        <div className="All">
            <div className="introduce">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
                >
                    <p className="Hi">안녕하세요!</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                >
                    <p>
                        <span className="Typing"><TypingEffect /></span>&nbsp;
                        <br className="mobile-break" />
                        <span>개발자, 정희진입니다</span>
                    </p>
                    <p className="motto">네가 세상에서 보고 싶은 변화가 되어라 – 마하트마 간디</p>
                </motion.div>
                <div className="more-button-wrapper">
                    <Link to="AboutMe" smooth={true} duration={800} offset={-70}>
                        <button className="more-button">더보기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
