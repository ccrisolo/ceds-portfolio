import React, { useState, useEffect, useRef } from "react";
import "./ScaleOutComponent.css";

const ScaleOutComponent = props => {
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
            className={`scale-out-element ${isVisible ? `is-visible` : ""}`}
        >
            {props.children}
        </div>
    );
};

export default ScaleOutComponent;