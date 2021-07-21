import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";

const HomePage = props => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <NavBar />
            <h1 style={{ color: "black" }}>
                Creating a responsive animated nav bar
            </h1>
        </>
    );
};

export default HomePage;
