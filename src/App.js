import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import Desk from "./animations/Desk.json";
import NavBar from "./components/NavBar/NavBar";
import IntroPage from "./Pages/Intro/IntroPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import EducationPage from "./Pages/Education/EducationPage";

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
                    id='projects'
                >
                    <ProjectsPage />
                </div>
                <div className='education-section' id='education'>
                    <EducationPage />
                </div>
                {/* <div className='about-section' id='about'>
                    <AboutPage />
                </div>
                <div className='contact-section' id='contact'>
                    <ContactPage />
                </div> */}
            </div>
        </>
    );
}

export default App;
