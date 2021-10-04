import React from "react";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import devGearsPurple from "../../animations/devGearsPurple.json"
import './ProjectsPage.css'

const ProjectsPage = () => {
    return (
        <>
            <h2>My Work</h2>
            <div className='illustration-2'>
                <LottieAnimation
                    lotti={devGearsPurple}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </>
    );
};

export default ProjectsPage;
