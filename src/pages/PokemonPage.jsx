import { getPokemon } from "../service"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export const PokemonPage = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemonData = await getPokemon(name)
                setPokemon(pokemonData)
                console.log(pokemonData);
            } catch (error) {
                console.log("fetching pokemon page: ", error);
            }
        }
        fetchData()
    }, [name])

    return(
        <div>
            <h1>pokemon</h1>
        </div>
    )
}