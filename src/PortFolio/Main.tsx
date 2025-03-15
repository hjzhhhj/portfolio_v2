import "./Main.css"
import "../Component/TypingEffect"

const Main = () => {
    return (
        <div>
            <header>
                <nav>
                    <p>JIN'S PORTFOLIO</p>
                    <ul>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Activity</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <TypingEffect /> 
        </div>
    )
}

export default Main;