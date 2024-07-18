import { getPokemon } from "../service";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Habilities } from "../components/habilities";
import Type from "../components/type-tag";

export const PokemonPage = () => {
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
    <Container>
      <Name>{pokemon.name}</Name>
      <DataContainer>
        <ImgContainer>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </ImgContainer>
        <Data>
          <div>
            <li>
              <h2>Habilidades</h2>
            </li>
            {pokemon.abilities.map((abilities, index) => (
              <Habilities key={index} ability={abilities.ability} />
            ))}
          </div>
          <div>
            <li>
              <h2>Tipo(s)</h2>
            </li>
            <Type types={pokemon.types} />
          </div>
        </Data>
      </DataContainer>
      <Moves>
        <li>
          <h2>Movimentos</h2>
        </li>
        {pokemon.moves.map((moves, index) => (
          <li key={index}>{moves.move.name}</li>
        ))}
      </Moves>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  color: #ffffff;
  font-size: 2rem;
  h2 {
    font-size: 3rem;
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  padding: 3rem;
`;

const ImgContainer = styled.div`
  max-width: 25rem;
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
  padding: 4rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const DataContainer = styled.div`
  display: flex;
  gap: 10rem;
`;

const Data = styled.ul`
    max width: 25rem;
`;

const Moves = styled.ul``;
