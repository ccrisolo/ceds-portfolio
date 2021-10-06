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
                        <Link
                            
                            href='#projects'
                        >
                            Projects
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            
                            href='#education'
                        >
                            Education
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            
                            href='#about'
                        >
                            About
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            
                            href='#contact'
                        >
                            Contact
                        </Link>
                    </Item>
                    {/* <Item>
                        <Link
                            target='#'
                            href='https://www.linkedin.com/in/cedric-crisolo/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} size='1x' />
                        </Link>
                    </Item>
                    <Item>
                        <Link target='#' href='https://github.com/ccrisolo'>
                            <FontAwesomeIcon icon={faGithub} size='1x' />
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            target='#'
                            href='https://www.facebook.com/profile.php?id=100010520404073'
                        >
                            <FontAwesomeIcon icon={faFacebook} size='1x' />
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            target='#'
                            href='https://twitter.com/CedricCrisolo'
                        >
                            <FontAwesomeIcon icon={faTwitter} size='1x' />
                        </Link>
                    </Item>
                    <Item>
                        <Link target='#' href='mailto: ccrisolo3@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} size='1x' />
                        </Link>
                    </Item> */}
                </Menu>
                <NavIcon onClick={() => setToggleNav(!toggleNav)}>
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                    <Line open={toggleNav} />
                </NavIcon>
            </NavigationContainer>
            <Overlay open={toggleNav} onClick={() => setToggleNav(!toggleNav)}>
                <OverlayMenu open={toggleNav}>
                    <Item>
                        <Link
                            
                            href='#projects'
                        >
                            Projects
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            target='#'
                            href='https://www.linkedin.com/in/cedric-crisolo/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </Link>
                    </Item>
                    <Item>
                        <Link target='#' href='https://github.com/ccrisolo'>
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            target='#'
                            href='https://www.facebook.com/profile.php?id=100010520404073'
                        >
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </Link>
                    </Item>
                    <Item>
                        <Link
                            target='#'
                            href='https://twitter.com/CedricCrisolo'
                        >
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                        </Link>
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
