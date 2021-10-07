import React, { useState, useEffect, useRef } from "react";
import "./LateralFadeInSection.css";

const LateralFadeInSection = props => {
    const [isVisible, setIsVisible] = useState(false);
    const domRefNode = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(items => {
            items.forEach(item => setIsVisible(item.isIntersecting));
        });
        observer.observe(domRefNode.current);
        return () => observer.unobserve(domRefNode.current);
    }, []);

    return (
        <div
            ref={domRefNode}
            className={`lateral-fade-section ${isVisible ? `is-visible` : ""}`}
        >
            {props.children}
        </div>
    );
};

export default LateralFadeInSection;