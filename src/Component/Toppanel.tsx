import { useState } from "react";
import "./Toppanel.css"
import AboutMe from "../PortFolio/AboutMe";
import Home from "../PortFolio/Main";
import Contact from "../PortFolio/Contact"
import Project from "../PortFolio/Project";
import Activity from "../PortFolio/Activity";

function Toppanel() {
    const [page, setPage] = useState("home");

    return (
        <header>
            <nav>
                <p><button onClick={() => setPage("home")}>JIN'S PORTFOLIO</button></p>
                <div className="nav-right">
                    <ul>
                        <li><button onClick={() => setPage("about")}>About Me</button></li>
                        <li><button onClick={() => setPage("activity")}>Activity</button></li>
                        <li><button onClick={() => setPage("project")}>Project</button></li>
                        <li><button onClick={() => setPage("contact")}>Contact</button></li>
                    </ul>
                </div>
            </nav>
            {page === "home" && <Home />}
            {page === "about" && <AboutMe />}
            {page === "activity" && <Activity />}
            {page === "project" && <Project />}
            {page === "contact" && <Contact />}
        </header>
    )
}

export default Toppanel;