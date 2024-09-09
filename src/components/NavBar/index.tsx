import { StyledLink, StyledHeader } from "./styles"
import Button from "../StyledComponents/Button";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

export default function NavBar() {
    
  const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>  
            <StyledHeader>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/extract'>Extrato</StyledLink>
                <Button buttonTheme={theme} onClick={() => toggleTheme()} children={"Mudar tema"} />
            </StyledHeader>
        </>
    )
}