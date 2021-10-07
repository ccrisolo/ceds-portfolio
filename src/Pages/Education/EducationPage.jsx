import React from "react";
import "./EducationPage.css";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import BackToSchool from "../../animations/BackToSchool.json";
import LateralFadeInSection from "../../components/FadeIn/LateralFadeInSection";

const EducationPage = props => {
    return (
        <>
            <div className='title-container'>
                <h2 className='section-title'>Education</h2>
            </div>
            <div className='education-container'>
                <LateralFadeInSection>
                    <div className='education-tile'>
                        <h3 className='school-name'>General Assembly</h3>
                        <p className='education-body'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea, deleniti modi distinctio commodi, rerum
                            obcaecati cum recusandae quod explicabo vitae animi
                            nesciunt cupiditate?
                        </p>
                    </div>
                </LateralFadeInSection>
                <LateralFadeInSection>
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
                </LateralFadeInSection>
                <LateralFadeInSection>
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
                </LateralFadeInSection>
            </div>
        </>
    );
};

export default EducationPage;
