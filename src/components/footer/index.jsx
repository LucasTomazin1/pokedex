import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components"
import { useContext } from 'react';
export const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <Container style={{ background: theme.footerBackground}}>

            <span>Feito por Lucas tomazini</span>
        </Container>
    )
}


const Container = styled.footer`
    display flex;
    height: 10rem;
    border-top: 2px solid #3D7DCA;
    flex-direction
`

