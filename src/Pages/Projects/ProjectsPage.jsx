import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json";
import "./ProjectsPage.css";
import FadeInSection from "../../components/FadeIn/FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = () => {
    return (
        <>
            <div className='illustration-2'>
                <h2 className='section-title'>My Work</h2>
                <FadeInSection>
                    <LottieAnimation
                        lotti={devGearsPurple}
                        width={"100%"}
                        height={"100%"}
                    />
                </FadeInSection>
            </div>
            <div className='projects-container'>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>Ecosystem Web</h1>
                        <p className='project-body'>
                            An art information resource application built with
                            ReactJS. Click on button below to demo. Password to
                            enter site is 'artsnewhome'
                            </p>
                         
                            <a
                                className='project-link-container'
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                target='#'
                                href='https://www.ecosystem.art'
                            >
                                <FontAwesomeIcon icon={faLink} color='white' />
                                <span className='project-link-text'>
                                    Click to Demo
                                </span>
                            </a>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>Ecosystem Mobile</h1>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>YouTube Clone</h1>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>Project 4: Undecided</h1>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
};

export default ProjectsPage;
