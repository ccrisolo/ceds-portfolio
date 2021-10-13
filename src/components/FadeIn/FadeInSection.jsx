import React, { useState, useEffect, useRef } from "react";
import "./FadeInSection.css";

const FadeInSection = props => {
    const [isVisible, setIsVisible] = useState(false);
    const domRefNode = useRef();

    useEffect(() => {
        const domRef = domRefNode.current;

        const observer = new IntersectionObserver(items => {
            items.forEach(item => setIsVisible(item.isIntersecting));
        });
        observer.observe(domRef);
        return () => observer.unobserve(domRef);
    }, []);

    return (
        <div
            ref={domRefNode}
            className={`fade-in-section ${isVisible ? `is-visible` : ""}`}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;
