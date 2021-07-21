import React from "react";
import {
    NavigationContainer,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Item,
    Link,
    Menu,
    Logo,
} from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <NavigationContainer>
                <Logo>Cedric's Portfolio</Logo>
                <Menu>
                    <Item>
                        <Link
                            target='#'
                            href='https://www.linkedin.com/in/cedric-crisolo/'
                        >
                            LinkedIn
                        </Link>
                    </Item>
                    <Item>
                        <Link target='#' href='https://github.com/ccrisolo'>
                            Github
                        </Link>
                    </Item>
                </Menu>
            </NavigationContainer>
        </>
    );
};

export default NavBar;
