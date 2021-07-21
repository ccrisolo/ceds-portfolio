import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
    padding: 0 20px;
    min-height: 9vh;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.h1`
    font-size: 25px;
    color: white;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;

    li:nth-child(2) {
        margin: 0px 20px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Item = styled.li``;

export const Link = styled.a`
    color: white;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;
