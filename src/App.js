import "./App.css";
import Parallax from "react-rellax";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import Desk from "./animations/Desk.json";
import developer from "./animations/developer.json";
import devGearsPurple from "./animations/devGearsPurple.json";
import NavBar from "./components/NavBar/NavBar";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
                                    delay: 40,
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
                                            `<h1>Let's build something <span style="color: #8832E0;"> GREAT </span> together!</h1>`
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
                        <div className='social-links-container'>
                            <div
                                className='social-icon'
                                style={{ backgroundColor: "#1da1f2" }}
                            >
                                <a
                                    target='#'
                                    href='https://www.linkedin.com/in/cedric-crisolo/'
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        color='white'
                                    />
                                </a>
                            </div>
                            <div
                                className='social-icon'
                                style={{ backgroundColor: "black" }}
                            >
                                <a
                                    target='#'
                                    href='https://www.linkedin.com/in/cedric-crisolo/'
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        color='white'
                                    />
                                </a>
                            </div>
                            <div
                                className='social-icon'
                                style={{ backgroundColor: "#3b5999" }}
                            >
                                <a
                                    target='#'
                                    href=''
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        color='white'
                                    />
                                </a>
                            </div>
                            <div
                                className='social-icon'
                                style={{ backgroundColor: "#1da1f2" }}
                            >
                                <a
                                    target='#'
                                    href='https://twitter.com/CedricCrisolo'
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        color='white'
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='resume-link-container'>
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                target='#'
                                href='https://drive.google.com/file/d/1L_Eliko15c5T51dDh0yfdt6KQlv-17hr/view?usp=sharing'
                            >
                                See My Resume
                            </a>
                        </div>
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
                    <Parallax horizontal='true' speed={3}>
                        <div className='illustration-2'>
                            <LottieAnimation
                                lotti={devGearsPurple}
                                width={"100%"}
                                height={"100%"}
                            />
                        </div>
                    </Parallax>
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
