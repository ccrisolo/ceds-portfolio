import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json";
import "./ProjectsPage.css";
import LateralFadeInSection from "../../components/FadeIn/LateralFadeInSection";
import FadeInSection from "../../components/FadeIn/FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = () => {
    return (
        <>
            <FadeInSection>
                <div className='illustration-2'>
                    <h2 className='section-title'>Projects</h2>
                    <LateralFadeInSection>
                        <LottieAnimation
                            lotti={devGearsPurple}
                            width={"100%"}
                            height={"100%"}
                        />
                    </LateralFadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='projects-container'>
                    <LateralFadeInSection>
                        <div className='project'>
                            <h1 className='project-title'>Ecosystem Web</h1>
                            <p className='project-body'>
                                An art information resource application built
                                with ReactJS. Click on button below and use
                                password 'artsnewhome' to access the site.
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
                    </LateralFadeInSection>
                    <LateralFadeInSection>
                        <div className='project'>
                            <h1 className='project-title'>Ecosystem Mobile</h1>
                            <p className='project-body'>
                                Complimentary iOS application, built using React
                                Native, that allows artists to maintain a
                                detailed portfolio of each artwork they create.
                            </p>
                            <a
                                className='project-link-container'
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                target='#'
                                type="video/mp4"
                                href='https://drive.google.com/file/d/1-4Q5FDJKb3nCPPGE4gsEHw5Ox9CqYCWA/view?usp=share_link'
                            >
                                <FontAwesomeIcon icon={faVideo} color='white' />
                                <span className='project-link-text'>
                                    Demo Video
                                </span>
                            </a>
                        </div>
                    </LateralFadeInSection>
                    <LateralFadeInSection>
                        <div className='project'>
                            <h1 className='project-title'>YouTube Clone</h1>
                            <p className='project-body'>
                                YouTube Clone was created using the MERN stack.
                                Utilizes the YouTube API by fetching popular videos 
                                in the US and allowing users to search.
                            </p>
                            <a
                                className='project-link-container'
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                target='#'
                            >
                                <FontAwesomeIcon icon={faLink} color='white' />
                                <span className='project-link-text'>
                                    Click to See
                                </span>
                            </a>
                        </div>
                    </LateralFadeInSection>
                    <LateralFadeInSection>
                        <div className='project'>
                            <h1 className='project-title'>Vanilla JS Drums</h1>
                            <p className='project-body'>
                                Play drums with your desktop keyboard using this
                                beat maker made using HTML, CSS and Vanilla
                                JavaScript
                            </p>
                            <a
                                className='project-link-container'
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                target='#'
                                href='https://ccrisolo.github.io/Vanilla-JS-Drums/'
                            >
                                <FontAwesomeIcon icon={faLink} color='white' />
                                <span className='project-link-text'>
                                    Click to See
                                </span>
                            </a>
                        </div>
                    </LateralFadeInSection>
                </div>
            </FadeInSection>
        </>
    );
};

export default ProjectsPage;
