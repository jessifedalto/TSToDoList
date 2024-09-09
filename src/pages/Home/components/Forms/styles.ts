import styled from "styled-components";


export const Form = styled.form<{theme: "dark" | "light"}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid;
    border-color: ${({ theme }) => (theme === "dark" ? "white" : "black")}; 
    border-radius: 5px;
    width: 30%;
    height: 30%;
`;

export const Input = styled.input<{theme: "dark" | "light"}>`
    width: 300px;
    height: 25px;
    border: 2px solid;
    border-color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    border-radius: 3px;
    background-color: ${({ theme }) => (theme === "dark" ? "cornflowerblue" : "azure")};
    color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const Button = styled.button`
    width: 200px;
    height: 30px;
    border: 2px black solid;
    border-radius: 15px;
    background-color: #65EB79;
`;