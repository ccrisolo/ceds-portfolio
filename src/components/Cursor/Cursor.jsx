import React from "react";
import "./Cursor.css";

const Cursor = () => {
    return <div className='cursor'></div>;
};

export default Cursor;


//functions for cursor below...
//copy and paste in Root component and import Cursor component
// const onMouseMove = e => {
//     const cursor = document.querySelector(".cursor");
//     cursor.style.left = `${e.pageX}px`;
//     cursor.style.top = `${e.pageY}px`;
// };

// const onMouseDown = e => {
//     const cursor = document.querySelector(".cursor");
//     cursor.style.border = "2px solid grey";
//     cursor.style.background = "grey";
// };

// const onMouseUp = e => {
//     const cursor = document.querySelector(".cursor");
//     cursor.style.border = "";
//     cursor.style.background = "";
// };
// const onMouseLeave = e => {
//     const cursor = document.querySelector(".cursor");
//     cursor.style.display = "none";
// };
// const onMouseEnter = e => {
//     const cursor = document.querySelector(".cursor");
//     cursor.style.display = "";
// };

// window.addEventListener("mousemove", onMouseMove);
// window.addEventListener("mousedown", onMouseDown);
// window.addEventListener("mouseup", onMouseUp);
// window.addEventListener("mouseleave", onMouseLeave);
// window.addEventListener("mouseenter", onMouseEnter);