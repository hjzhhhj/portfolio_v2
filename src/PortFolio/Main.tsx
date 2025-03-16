import "./Main.css"
import TypingEffect from "../Component/TypingEffect"

const Main = () => {
    return (
        <div className="All">
            <div className="top-panel">
                <header>
                    <nav>
                        <p><a href="">JIN'S PORTFOLIO</a></p>
                        <div className="nav-right">
                            <ul>
                                <li><a href="">About Me</a></li>
                                <li><a href="">Activity</a></li>
                                <li><a href="">Project</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="introduce">
                <p>Hello! I'm Heejin</p>
                <p>Aspiring Great <span className="Typing"><TypingEffect /></span></p>
            </div>
        </div>
    )
}

export default Main;