import React from "react";
import "./AboutPage.css";
import ProfilePic from "../../images/ProfilePhoto.jpg";

const AboutPage = () => {
    return (
        <>
            <div className='about-title-container'>
                <h2 className='section-title'>About Me</h2>
            </div>
            <div className='about-text-container'>
                <img
                    className='profile-pic'
                    src={ProfilePic}
                    alt='Cedric Profile Photo'
                />
                <p className='about-text'>
                    I am a Frontend Software Engineer driven by the opportunity
                    to help people in need. I look to provide simple solutions
                    to complex problems while continuing to develop and apply
                    new skills. The experience I've gained as a Behavior
                    Analyst, running a small business personal training as well
                    as working at a start-up as a Mobile Frontend Developer has
                    exercised my ability to adapt quickly to situations,
                    sharpened my awareness to manage teams and deadlines, and
                    honed my ability to work individually as well as in a team.
                    Skilled in Mobile/Web Development, Human Relations,
                    Management, Behavior, and Health/Fitness.
                </p>
            </div>
            <div className='reach-out'>
                <h3>
                    Want to work together? Feel free to reach out! I'm a
                    Frontend Software Engineer for Web and Mobile with Full
                    Stack Experience.
                </h3>
            </div>
        </>
    );
};

export default AboutPage;
