import { useState } from "react"
import styled from "styled-components"
import { Button } from "../button"


export const Searchbar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState("")

    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }

    const onClickHandler = () =>{
        const pokemonData = onSearch(search)
        console.log("pokemon: ", pokemonData)

    }
    return(
        <>
            <Container>
                <Input type="text" placeholder="Buscar pokemon" onChange={onChangeHandler} />
                <Button onClick={onClickHandler}>Pesquisar</Button>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    gap: 2rem;
`

const Input = styled.input`
    height: 3rem;
    width: 20rem;
    border-radius: 0.8rem;
    background-color: #3D7DCA;
    color: #F6EB61;
    font-size: 1.8rem;
    &::placeholder {
    color: #F6EB61;
    padding-left: 0.6rem; 
}
`