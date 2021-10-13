import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./TypeWriter.css";

const TypeWriter = props => {
    return (
        <TypewriterComponent
            options={{
                loop: false,
                cursor: "",
                delay: 40,
                cursorClassName: "type-cursor",
                wrapperClassName: "type-wrapper",
            }}
            onInit={typewriter => {
                typewriter
                    .typeString(`<h1>Hi there! I'm Cedric.</h1>`)
                    .pauseFor(1000)
                    .typeString(
                        `<h1>Let's build something <span style="color: #f53bff;"> GREAT </span> together!</h1>`
                    )
                    .start();
            }}
        />
    );
};

export default TypeWriter;
