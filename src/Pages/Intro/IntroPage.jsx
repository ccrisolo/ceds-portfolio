import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import developer from "../../animations/developer.json";
import "./IntroPage.css";

const IntroPage = props => {
    return (
        <>
            <div className='intro'>
                <p>
                    I'm a passionate Frontend Developer with experience in both
                    Web and Mobile. A few of my favorite technologies to use are
                    JavaScript, React, React Native and Redux. I enjoy learning
                    about software development and thrive with people who are
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
                            <FontAwesomeIcon icon={faLinkedin} color='white' />
                        </a>
                    </div>
                    <div
                        className='social-icon'
                        style={{ backgroundColor: "black" }}
                    >
                        <a target='#' href='https://github.com/ccrisolo'>
                            <FontAwesomeIcon icon={faGithub} color='white' />
                        </a>
                    </div>
                    <div
                        className='social-icon'
                        style={{ backgroundColor: "#3b5999" }}
                    >
                        <a
                            target='#'
                            href='https://www.facebook.com/profile.php?id=100010520404073'
                        >
                            <FontAwesomeIcon icon={faFacebook} color='white' />
                        </a>
                    </div>
                    <div
                        className='social-icon'
                        style={{ backgroundColor: "#1da1f2" }}
                    >
                        <a target='#' href='https://twitter.com/CedricCrisolo'>
                            <FontAwesomeIcon icon={faTwitter} color='white' />
                        </a>
                    </div>
                    <div
                        className='social-icon'
                        style={{ backgroundColor: "#202020" }}
                    >
                        <a target='#' href='mailto: ccrisolo3@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} color='white' />
                        </a>
                    </div>
                </div>
                <div>
                    <a
                        className='resume-link-container'
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                        target='#'
                        href='https://drive.google.com/file/d/1_Kc5K6VJ2X9yakHeq4EWjnaPkVjdphaZ/view?usp=sharing'
                    >
                        <FontAwesomeIcon icon={faFile} color='white' />
                        <span className='resume-text'>My Resume</span>
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
        </>
    );
};

export default IntroPage;
