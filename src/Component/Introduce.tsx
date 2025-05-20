import { useState } from "react";
import { motion } from "framer-motion";
import "./Introduce.css"
import TypingEffect from "./TypingEffect"

function Introduce() {
    return (
        <motion.div
            initial={{ opacity: 0 }}        
            animate={{ opacity: 1 }}        
            transition={{ duration: 3 }}   
            >
            <div className="All">
                <div className="top-panel">
                </div>
                <div className="introduce">
                    <p className="Hi">안녕하세요!</p>
                    <p><span className="Typing"><TypingEffect /> 개발자, 정희진입니다.</span></p>
                    <p className="motto">네가 세상에서 보고 싶은 변화가 되어라 – 마하트마 간디</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Introduce;