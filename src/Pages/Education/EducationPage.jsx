import React, { useEffect, useState, useRef } from "react";
import "./EducationPage.css";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import BackToSchool from "../../animations/BackToSchool.json";
import FadeInSection from "../../components/FadeIn/FadeInSection";
import ScaleOutComponent from "../../components/ScaleOut/ScaleOutComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJs,
    faGit,
    faReact,
    faNodeJs,
    faPython,
} from "@fortawesome/free-brands-svg-icons";

const EducationPage = props => {
    return (
        <>
            <div className='title-container'>
                <h2 className='section-title'>Education</h2>
            </div>
            <div className='education-container'>
                <ScaleOutComponent>
                    <div className='education-tile'>
                        <h3 className='school-name'>
                            General Assembly: Software Engineering Immersive
                            (SEI) Graduate
                        </h3>
                        <span className='date-range'>Jan 2020 – Apr 2020</span>
                        <p className='education-body'>
                            Completion of 12 week (480hr) coding bootcamp that
                            taught the fundamentals of full stack software
                            engineering. Technologies covered:
                            <ul className='list'>
                                <li className='list-item'>
                                    {" "}
                                    <FontAwesomeIcon
                                        icon={faHtml5}
                                        color='white'
                                    />{" "}
                                    HTML
                                </li>
                                <li className='list-item'>
                                    {" "}
                                    <FontAwesomeIcon
                                        icon={faCss3}
                                        color='white'
                                    />{" "}
                                    CSS
                                </li>
                                <li className='list-item'>
                                    <FontAwesomeIcon
                                        icon={faJs}
                                        color='white'
                                    />{" "}
                                    JavaScript
                                </li>
                                <li className='list-item'>
                                    <FontAwesomeIcon
                                        icon={faGit}
                                        color='white'
                                    />{" "}
                                    Git
                                </li>
                                <li className='list-item'>
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        color='white'
                                    />{" "}
                                    React
                                </li>
                                <li className='list-item'>
                                    <FontAwesomeIcon
                                        icon={faNodeJs}
                                        color='white'
                                    />{" "}
                                    NodeJS
                                </li>
                                <li className='list-item'>
                                    {" "}
                                    <FontAwesomeIcon
                                        icon={faPython}
                                        color='white'
                                    />{" "}
                                    Python
                                </li>
                                <li className='list-item'>Express</li>
                                <li className='list-item'>MongoDB</li>
                                <li className='list-item'>SQL</li>
                                <li className='list-item'>Django</li>
                                <li className='list-item'>RESTful API</li>
                                <li className='list-item'>OAuth</li>
                                <li className='list-item'>JWT</li>
                            </ul>
                        </p>
                    </div>
                </ScaleOutComponent>
                <ScaleOutComponent>
                    <div className='education-tile'>
                        <h3 className='school-name'>
                            Florida Institute of Technology: Board Certified
                            Behavior Analyst Program (BCBA)
                        </h3>
                        <span className='date-range'>Sept 2012 - Oct 2013</span>
                        <p className='education-body'>
                            Completion of the 21-credit course sequence that
                            allows students holding a minimum of a master’s
                            degree in a BACB-approved field to obtain the
                            supervised field experience required by the Behavior
                            Analyst Certification Board (BACB)
                        </p>
                    </div>
                </ScaleOutComponent>
                <ScaleOutComponent>
                    <div className='education-tile'>
                        <h3 className='school-name'>
                            Phillips Graduate Institute: Master’s Program
                            Clinical Psychology (MA)
                        </h3>
                        <span className='date-range'>Sept 2008 - May 2010</span>
                        <p className='education-body'>
                            Attained Master's in Clinical Psychology which
                            included training in areas such as Relationship
                            Dynamics, Diversity, Assessments, Intervention, and
                            Research/Evaluation Competency through a combination
                            of lectures and clinical internships.
                        </p>
                    </div>
                </ScaleOutComponent>
            </div>
        </>
    );
};

export default EducationPage;
