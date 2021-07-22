import React, { useState } from "react";
import {
    NavigationContainer,
    Logo,
    Menu,
    Item,
    Link,
    NavIcon,
    Line,
    Overlay,
    OverlayMenu,
} from "./NavBarElements";

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <NavigationContainer open={toggleNav}>
                <div style={{ paddingTop: "5px" }}>
                    <img
                        src='https://i.imgur.com/wXYrKDm.png'
                        alt='Developer Logo'
                        height='75px'
                        width='75px'
                    />
                </div>
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
                <NavIcon onClick={() => setToggleNav(!toggleNav)}>
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                </NavIcon>
            </NavigationContainer>
            <Overlay open={toggleNav}>
                <OverlayMenu open={toggleNav}>
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
                </OverlayMenu>
            </Overlay>
        </>
    );
};

export default NavBar;
