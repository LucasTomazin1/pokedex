import { useContext } from "react"
import { Searchbar } from '../searchbar';
import { getPokemon } from "../../service";
import { ThemeTogglerButton } from "../theme-toggler-buuton";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components"
import logo from "../../assets/pokemon.png"



export const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    const onSearchHandler = async(pokemon) => {
        const result = await getPokemon(pokemon)
        console.log(result)
        return await result.json        
    }

    return(
        <>
            <Container style={{ background: theme.navbarBackground  }}>
                <ImgContainer >
                    <img src={logo} alt="Logo do Pokemon" />
                </ImgContainer>
                <Searchbar onSearch={onSearchHandler} />
                <ThemeTogglerButton />
            </Container>
        </>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    width: 100vw;
    border-bottom: 2px solid #3D7DCA;
    `

const ImgContainer = styled.div`

    img{
        width: 20rem;

        }
`