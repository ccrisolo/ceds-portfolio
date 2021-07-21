import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
    padding: 0 20px;
    min-height: 9vh;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2
`;

export const Logo = styled.h1`
    font-size: 25px;
    color: white;
`;
