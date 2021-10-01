import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Parallax from "react-rellax";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import HomeOffice from "./animations/HomeOffice.json";
import Desk from "./animations/Desk.json";
import developer from "./animations/developer.json";
import Portfolio from "./animations/Portfolio.json";
import Task from "./animations/Task.json";
import NavBar from "./components/NavBar/NavBar";
import Typewriter from "typewriter-effect";

function App() {
    return (
        <>
            <div className='App'>
                <div className='nav-bar'>
                    <NavBar />
                </div>
                <div className='intro-section'>
                    <div className='intro'>
                        <div className='typing-container'>
                            <Typewriter
                                options={{
                                    loop: false,
                                    cursor: "",
                                    delay:50,
                                    cursorClassName: "type-cursor",
                                    wrapperClassName: "type-wrapper",
                                }}
                                onInit={typewriter => {
                                    typewriter
                                        .typeString(
                                            `<h1>Hi there! I'm Cedric.</h1>`
                                        )
                                        .pauseFor(1000)
                                        .typeString(
                                            `<h1>Let's build something <span style="color: purple;"> GREAT </span> together!</h1>`
                                        )
                                        .start();
                                }}
                            />
                        </div>
                        <p>
                            I'm a passionate Frontend Developer with experience
                            in both Web and Mobile. My favorite technologies to
                            use are JavaScript, React, React Native and Redux. I
                            enjoy learning and thrive with people who are
                            excited to build and learn from one another.
                        </p>
                    </div>
                    <div className='illustration-1'>
                        <LottieAnimation
                            lotti={developer}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </div>
                <div className='projects-section'>
                    <h2>This will be the projects section</h2>
                    <div className='illustration-2'>
                        <LottieAnimation
                            lotti={Portfolio}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </div>
                <div className='education-section'>
                    <h2>This will be the education section</h2>
                    <div className='illustration-3'>
                        <LottieAnimation
                            lotti={Desk}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
