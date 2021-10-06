import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json";
import "./ProjectsPage.css";
import FadeInSection from "../../components/FadeIn/FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = () => {
    return (
        <>
            <div className='illustration-2'>
                <h2 className='section-title'>My Projects</h2>
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
                            ReactJS. Click on button below and use password
                            'artsnewhome' to access the site.
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
                                Click to See
                            </span>
                        </a>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>Ecosystem Mobile</h1>
                        <p className='project-body'>
                            A mobile application, built with React Native, that
                            allows artists to document their art and add to our
                            web clients database of information.
                        </p>
                        <a
                            className='project-link-container'
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            target='#'
                            href='https://drive.google.com/file/d/1JddMP6KRXACQyprr2a4xnyuwAfRwm8Jh/preview'
                        >
                            <FontAwesomeIcon icon={faVideo} color='white' />
                            <span className='project-link-text'>
                                Demo Video
                            </span>
                        </a>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>YouTube Clone</h1>
                        <p className='project-body'>
                            YouTube Clone was created using the MERN stack and
                            utilizes the YouTube API. Users can search for
                            videos & add/remove to a favorites list.
                        </p>
                        <a
                            className='project-link-container'
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            target='#'
                            // href=''
                        >
                            <FontAwesomeIcon icon={faLink} color='white' />
                            <span className='project-link-text'>
                                Click to See
                            </span>
                        </a>
                    </div>
                </FadeInSection>
                {/* <FadeInSection>
                    <div className='project'>
                        <h1 className='project-title'>Project 4: Undecided</h1>
                    </div>
                </FadeInSection> */}
            </div>
        </>
    );
};

export default ProjectsPage;
