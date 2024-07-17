import styled from "styled-components";
import { getPokemon, getPokemons } from "../../service";
import { useState, useEffect } from "react";
import { PokemonCard } from "../pokemon-card";
import { Button } from "./../button/index";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import pikachu from "../../assets/pikachu-removebg.png";
import bulbasaur from "../../assets/bulba-removebg.png";
import meow from "../../assets/meow_2-removebg.png";

export const Pokedex = () => {
  const { theme } = useContext(ThemeContext);
  const [pokemons, setPokemons] = useState({
    pokemonList: [],
  });

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemons = await getPokemons(offset);
        console.log("pokemons: ", pokemons);
        const pokemonData = await Promise.all(
          pokemons.results.map(async (pokemon) => {
            const data = await getPokemon(pokemon.name);
            return {
              name: data.name,
              types: data.types,
              image: data.sprites.front_default,
            };
          })
        );
        setPokemons((prevState) => ({
          pokemonList: [...prevState.pokemonList, ...pokemonData],
        }));
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };
    fetchData();
  }, [offset]);

  return (
    <Section style={{ background: theme.bodyBackground }}>
      <Grid>
        {pokemons.pokemonList.map((pokemon, index) => (
          <li
            key={index}
            style={{ boxShadow: theme.cardShadow, borderRadius: "8px" }}
          >
            <PokemonCard
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          </li>
        ))}
      </Grid>
      <Nav>
        <Button
          onClick={() => {
            setOffset(offset + 12);
          }}
        >
          Mais pokemons
        </Button>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Voltar para o topo
        </Button>
      </Nav>
      <Pikachu>
        <Img src={pikachu} />
      </Pikachu>
      <Bulbasaur>
        <Img src={bulbasaur} />
      </Bulbasaur>
      <Meow>
        <Img src={meow} />
      </Meow>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
`;

const Grid = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
`;

const Pikachu = styled.div`
  width: 24rem;
  heigth: 16.3rem;
  position: absolute;
  bottom: -3rem;
`;

const Bulbasaur = styled.div`
  width: 21rem;
  height: 19.47rem;
  position: absolute;
  bottom: 1rem;
  left: 5rem;
`;

const Meow = styled.div`
  width: 21rem;
  heigth: 30rem;
  position: absolute;
  bottom: -3rem;
  right: 5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70rem;
  padding: 1.5rem;
`;
