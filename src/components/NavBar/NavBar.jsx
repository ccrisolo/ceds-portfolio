import React, { useState } from "react";
import {
    NavigationContainer,
    Menu,
    Item,
    Link,
    NavIcon,
    Line,
    Overlay,
    OverlayMenu,
    Signature,
    CloseBtnX,
} from "./NavBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <NavigationContainer open={toggleNav}>
                <div>
                    <Signature>Cedric Crisolo</Signature>
                </div>
                <Menu>
                    <Item>
                        <Link href='#projects'>Projects</Link>
                    </Item>
                    <Item>
                        <Link href='#education'>Education</Link>
                    </Item>
                    <Item>
                        <Link href='#about'>About</Link>
                    </Item>
                    <Item>
                        <Link href='#about'>Contact</Link>
                    </Item>
                </Menu>
                <NavIcon onClick={() => setToggleNav(!toggleNav)}>
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                </NavIcon>
            </NavigationContainer>
            <Overlay open={toggleNav} onClick={() => setToggleNav(!toggleNav)}>
                <OverlayMenu open={toggleNav}>
                    <CloseBtnX>
                        <h4>Close</h4>{" "}
                    </CloseBtnX>
                    <Item>
                        <Link href='#projects'>Projects</Link>
                    </Item>
                    <Item>
                        <Link href='#education'>Education</Link>
                    </Item>
                    <Item>
                        <Link href='#about'>About</Link>
                    </Item>
                    <Item>
                        <Link href='#about'>Contact</Link>
                    </Item>

                    <Item>
                        <Link target='#' href='mailto: ccrisolo3@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} /> Email
                        </Link>
                    </Item>
                </OverlayMenu>
            </Overlay>
        </>
    );
};

export default NavBar;
