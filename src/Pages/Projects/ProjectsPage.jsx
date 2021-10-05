import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json";
import "./ProjectsPage.css";
import FadeInSection from "../../components/FadeIn/FadeInSection";

const ProjectsPage = () => {
    return (
        <>
            <div className='illustration-2'>
                <h2>My Work</h2>
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
                    <div className='project'>project 1</div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>project 2</div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>project 3</div>
                </FadeInSection>
                <FadeInSection>
                    <div className='project'>project 4</div>
                </FadeInSection>
            </div>
        </>
    );
};

export default ProjectsPage;
