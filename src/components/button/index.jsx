import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return(
        <Btn {...props}
        style={{backgroundColor: theme.buttonBackground }}
        />
    )
}

const Btn = styled.button`
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.8rem;
    font-size: 1.2rem;
    font-weight: 00;
    font-family: inherit;
    background-color: #007fff;
    color: #f0f000;
    cursor: pointer;
    transition: border-color 0.25s;
    min-width: 7rem;
    &:hover{
        border-color: #f0f000;
    }
`