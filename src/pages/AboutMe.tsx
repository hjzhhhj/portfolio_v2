import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import "./About.css";
import Me from "../Assets/Me.png"

function AboutMe() {
    return (
        <div className="AboutMe">
            <div className='pic'>
                {Me}
            </div>
            
        </div>
    );
}

export default AboutMe;
