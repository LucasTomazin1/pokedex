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
import { Link } from "react-router-dom";

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
        const pokemonData = await Promise.all(
          pokemons.results.map(async (pokemon) => {
            const data = await getPokemon(pokemon.name);
            return {
              name: data.name,
              types: data.types,
              image: data.sprites.other.showdown.front_default,
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
    <Main style={{ background: theme.bodyBackground }}>
      <Grid>
        {pokemons.pokemonList.map((pokemon, index) => (
          <li
            key={index}
            style={{ boxShadow: theme.cardShadow, borderRadius: "8px" }}
          >
            <LinkCard to={`/pokemon/${pokemon.name}`}>
              <PokemonCard
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
              />
            </LinkCard>
          </li>
        ))}
      </Grid>
      <Nav>
        <Button
          onClick={() => {
            setOffset(offset + 12);
          }}
        >
          Load more
        </Button>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Back to Top
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
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  min-height: 94%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  color: #121212;
`;

const Grid = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
  }
`;

const LinkCard = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    transform: scale(1.2);
  }
`;

const Pikachu = styled.div`
  width: 24rem;
  height: 16.3rem;
  position: absolute;
  bottom: -2.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 20rem;
    height: 13.3rem;
    bottom: -2rem;
  }

  @media (max-width: 768px) {
    width: 16rem;
    height: 10.3rem;
    bottom: -1.5rem;
  }
`;

const Bulbasaur = styled.div`
  width: 21rem;
  height: 19.47rem;
  position: absolute;
  bottom: 1rem;
  left: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    height: 16.47rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 13.47rem;
  }

  @media (max-width: 425px) {
    width: 10.5rem;
    height: 10.47rem;
    bottom: 5rem;
    left: 2rem;
  }

   @media (max-width: 320px){
    width: 8.5rem;
    height: 10.47rem;
    bottom: 3rem;
    left: 1rem;
   }
`;

const Meow = styled.div`
  width: 21rem;
  height: 30rem;;
  position: absolute;
  bottom: -3rem;
  right: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 18rem;
    height: 27rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    height: 24rem;
  }

  @media (max-width: 425px) {
    width: 10rem;
    height: 18rem;
    bottom: 10rem;
    bottom: 0;
    right: 2rem;
  }

  @media (max-width: 320px) {
    width: 10rem;
    height: 18rem;
    bottom: 10rem;
    bottom: -1rem;
    right: 0.5rem;
  }
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
  z-index: 1;

  @media (max-width: 1024px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 50rem;
  }

  @media (max-width: 425px) {
    width: 40rem;
    align-items: center;
  }

  @media (max-width: 320px) {
    width: 30rem;
  }
`;
