import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import IntroPage from "./Pages/Intro/IntroPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import EducationPage from "./Pages/Education/EducationPage";
import AboutPage from "./Pages/About/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
                <div className='about-section' id='about'>
                    <AboutPage />
                </div>
                {/* <div className='contact-section' id='contact'>
                    <ContactPage />
                </div> */}

                <footer className='footer-bar'>
                    <div className='footer-icon'>
                        <a
                            target='#'
                            href='https://www.linkedin.com/in/cedric-crisolo/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} color='white' />
                        </a>
                    </div>
                    <div className='footer-icon'>
                        <a target='#' href='https://github.com/ccrisolo'>
                            <FontAwesomeIcon icon={faGithub} color='white' />
                        </a>
                    </div>
                    <div className='footer-icon'>
                        <a
                            target='#'
                            href='https://www.facebook.com/profile.php?id=100010520404073'
                        >
                            <FontAwesomeIcon icon={faFacebook} color='white' />
                        </a>
                    </div>
                    <div className='footer-icon'>
                        <a target='#' href='https://twitter.com/CedricCrisolo'>
                            <FontAwesomeIcon icon={faTwitter} color='white' />
                        </a>
                    </div>
                    <div className='footer-icon'>
                        <a target='#' href='mailto: ccrisolo3@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} color='white' />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
