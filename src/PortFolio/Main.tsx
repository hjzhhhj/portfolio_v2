import { useState } from "react";
import "./Main.css"
import TypingEffect from "../Component/TypingEffect"
import Toppanel from "../Component/Toppanel";
import AboutMe from "./AboutMe"

function Main () {
    return (
        <div className="All">
            <div className="top-panel">
                <Toppanel />
            </div>
            <div className="introduce">
                <p>Hello! I'm Heejin</p>
                <p>Aspiring Great <span className="Typing"><TypingEffect /></span></p>
            </div>
        </div>
    )
}

export default Main;