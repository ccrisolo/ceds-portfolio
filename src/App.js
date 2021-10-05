import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import Desk from "./animations/Desk.json";
import devGearsPurple from "./animations/devGearsPurple.json";
import NavBar from "./components/NavBar/NavBar";
import IntroPage from "./Pages/Intro/IntroPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const domRefNode = useRef();

    // fade in transition observer for when elements are visible 
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRefNode.current);
        return () => observer.unobserve(domRefNode.current);
    }, []);

    return (
        <>
            <div className='App'>
                <div className='nav-bar'>
                    <NavBar />
                </div>
                <div className='intro-section'>
                    <IntroPage />
                </div>
                <div
                    className={`projects-section ${
                        isVisible ? `is-visible` : ""
                    }`}
                    ref={domRefNode}
                >
                    <ProjectsPage />
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
