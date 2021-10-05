import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json";
import "./ProjectsPage.css";

const ProjectsPage = () => {
    return (
        <>
            <div className='illustration-2'>
                <h2>My Work</h2>
                <LottieAnimation
                    lotti={devGearsPurple}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <div className='projects-container'>
                <div className='project'>project 1</div>
                <div className='project'>project 2</div>
                <div className='project'>project 3</div>
                <div className='project'>project 4</div>
            </div>
        </>
    );
};

export default ProjectsPage;
