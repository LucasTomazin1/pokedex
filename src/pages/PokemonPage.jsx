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

     @media (max-width: 1024px) {
    font-size: 1.8rem;
    
    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    
    h2 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
    
    h2 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    
    h2 {
      font-size: 2.2rem;
    }
  }
`;

const DataContainer = styled.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 1024px) {
    gap: 8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

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
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 425px) {
    font-size: 3.5rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
`;

const ImgContainer = styled.div`
  max-width: 35rem;
  max-height: 35rem;
  width: 35rem;
  height: 35rem;
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

  @media (max-width: 1024px) {
    max-width: 26rem;
    max-height: 26rem;
    width: 26rem;
    padding: 6rem;
  }

  @media (max-width: 425px) {
    max-width: 20rem;
    max-height: 20rem;
    width: 20rem;
    padding: 4rem;
  }

  @media (max-width: 320px) {
    max-width: 16rem;
    max-height: 16rem;
    width: 16rem;
    padding: 3rem;
  }
`;

const Data = styled.div`
  max-width: 50rem;
  ul {
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      max-width: 45rem;
    }

    @media (max-width: 768px) {
      max-width: 40rem;
      text-align: center;
    }

    @media (max-width: 425px) {
      max-width: 35rem;
    }

    @media (max-width: 320px) {
      max-width: 30rem;
    }
  }
`;

const TypeWeight = styled.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 6rem;
  }

  @media (max-width: 425px) {
    gap: 5rem;
  }
`;

const Weight = styled.div`
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

const Moves = styled.ul`
  max-width: 90rem;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 80rem;
  }

  @media (max-width: 768px) {
    max-width: 70rem;
  }

  @media (max-width: 425px) {
    max-width: 60rem;
  }

  @media (max-width: 320px) {
    max-width: 50rem;
  }
`;

const MovesContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Move = styled.li`
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    padding: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    padding: 0.7rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 0.6rem;
  }
`;
