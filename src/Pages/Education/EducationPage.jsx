import React from "react";
import "./EducationPage.css";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import BackToSchool from "../../animations/BackToSchool.json";
import FadeInSection from "../../components/FadeIn/FadeInSection";

const EducationPage = props => {
    return (
        <>
            <div className='title-container'>
                <h2 className='section-title'>Education</h2>
            </div>
            <div className='education-container'>
                <FadeInSection>
                    <div className='education-tile'>
                        <h3 className='school-name'>General Assembly</h3>
                        <p className='education-body'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea, deleniti modi distinctio commodi, rerum
                            obcaecati cum recusandae quod explicabo vitae animi
                            nesciunt cupiditate?
                        </p>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='education-tile'>
                        <h3 className='school-name'>
                            Florida Institute of Technology
                        </h3>
                        <p className='education-body'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea, deleniti modi distinctio commodi, rerum
                            obcaecati cum recusandae quod explicabo vitae animi
                            nesciunt cupiditate?
                        </p>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='education-tile'>
                        <h3 className='school-name'>
                            Phillips Graduate Institute
                        </h3>
                        <p className='education-body'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea, deleniti modi distinctio commodi, rerum
                            obcaecati cum recusandae quod explicabo vitae animi
                            nesciunt cupiditate?
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
};

export default EducationPage;
