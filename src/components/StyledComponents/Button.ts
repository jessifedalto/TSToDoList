import styled from "styled-components"

interface IButtonProps {
    buttonTheme: "dark" | "light"
}

const Button = styled("button")<IButtonProps>(({ buttonTheme }) => ({
    width: "100px",
    backgroundColor: buttonTheme == "dark" ? "black" : "white",
    color: buttonTheme == "dark" ? "white" : "black",
}))


export default Button