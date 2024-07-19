import { getPokemon } from "../service";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Abilities } from "../components/habilities";
import Type from "../components/type-tag";
import { ThemeContext } from "../contexts/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const PokemonPage = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemon(name);
        setPokemon(pokemonData);
        console.log(pokemonData);
      } catch (error) {
        console.log("fetching pokemon page: ", error);
      }
    };
    fetchData();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      style={{ backgroundColor: theme.bodyBackground, color: theme.color }}
    >

      <DataContainer>
        <Left>
          <StyledLink to="/">
            <Home icon={faHouse} />
          </StyledLink>
          <ImgContainer>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </ImgContainer>
        </Left>
        <Right>
        <Name>{pokemon.name}</Name>
        <Data>
          <ul>
            <li>
              <h2>Abilities</h2>
            </li>
            {pokemon.abilities.map((abilities, index) => (
              <Abilities key={index} ability={abilities.ability} />
            ))}
          </ul>
          <TypeWeight>
            <div>
              <h2>Type</h2>
              <Type types={pokemon.types} />
            </div>
            <div>
              <h2>Weight</h2>
              <Weight>{pokemon.weight}</Weight>
            </div>
          </TypeWeight>
        </Data>
        </Right>
      </DataContainer>
      <Moves>
        <li>
          <h2>Moves</h2>
        </li>
        <MovesContainer>
          {pokemon.moves.map((moves, index) => (
            <Move
              key={index}
              style={{
                backgroundColor: theme.moveCard,
                color: theme.colorTextCard,
              }}
            >
              {moves.move.name}
            </Move>
          ))}
        </MovesContainer>
      </Moves>
    </Container>
  );
};

const Container = styled.main`
  padding: 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const Left = styled.div`

`

const Right = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Home = styled(FontAwesomeIcon)`
  font-size: 4rem;
    &:hover {
    color: inherit;
    transform: scale(1.1);
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 10rem;
`;

const ImgContainer = styled.div`
  max-width: 25rem;
  max-height: 25rem;
  width: 25rem;
  height: 25rem;
  height: auto;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 8rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Data = styled.div`
  max-width: 50rem;
  ul{
    margin-bottom: 2rem;
  }
`;

const TypeWeight = styled.div`
  display: flex;
  gap: 10rem;
`;

const Weight = styled.div`
  font-size: 2rem;
`;

const Moves = styled.ul`
  max-width: 90rem;
  width: 100%;
  margin-top: 2rem;
`;

const MovesContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Move = styled.li`
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
