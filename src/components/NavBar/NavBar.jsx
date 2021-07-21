import React from "react";
import {
    NavigationContainer,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <NavigationContainer>
                <Logo>Cedric's Portfolio</Logo>
                <div>
                    <p style={{ color: "white" }}>
                        Hello again. Time to get to work...
                    </p>
                </div>
            </NavigationContainer>
        </>
    );
};

export default NavBar;
