import styled from "styled-components";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    min-height: 20px;
    background-color: rgba(55, 55, 55, 0.1);
    backdrop-filter: blur(3px);
    flex-grow: 1;
`;

export const Signature = styled.p`
    font-family: Creattion;
    color: white;
    font-size: 40px;
    align-self: flex-start;
    @media (max-width: 500px) {
        font-size: 35px;
    }
`;

export const Logo = styled.h1`
    font-size: 25px;
    color: black;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 15px;

    @media (max-width: 1199px) {
        display: none;
    }
`;

export const Item = styled.li`
    padding-right: 30px;
`;

export const Link = styled.a`
    color: white;
    text-decoration: none;

    :hover {
        text-decoration: underline;
        opacity: 0.5;
    }
`;

export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;

    :hover {
    }

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: white;
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
        width: ${props => (props.open ? "40%" : "70%")};
    }
`;

export const Overlay = styled.div`
    position: absolute;
    height: ${props => (props.open ? "100vh" : 0)};
    width: 100vw;
    background-color: rgba(55, 55, 55, 0.1);
    backdrop-filter: blur(3px);
    transition: height 0.4s ease-in-out;
    z-index: 4;

    @media (min-width: 1200px) {
        display: none;
    }
`;

export const OverlayMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-40%, -50%);

    li {
        opacity: ${props => (props.open ? 1 : 0)};
        font-size: 25px;
        transition: opacity 0.4s ease-in-out;
    }

    li:nth-child(2) {
        margin: 50px 0px;
    }

    @media (min-width: 400px) {
        left: 42.5%;
    }
`;
