import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bolder;
`;

export const StyledHeader = styled.header`
    height: 5vh;
    width: 100%;
    background-color: blueviolet;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
`;