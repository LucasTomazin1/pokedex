import { useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { getPokemon } from "../../service";

export const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState();
  const [initSearch, setInitSearch] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = async () => {
    const lowercaseSearch = search.toLowerCase();
    if(lowercaseSearch !== "") {        
        setInitSearch(true);
        onSearchHandler(lowercaseSearch);
    } else{
        return
    }
  };

  const onSearchHandler = async (pokemonData) => {    
        const result = await getPokemon(pokemonData);
        setPokemonData(result);
  };

  const primaryType = pokemonData?.types?.[0]?.type?.name;

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search pokémon"
        onChange={onChangeHandler}
      />
      <Button onClick={onClickHandler}>Search</Button>
      {!pokemonData ? (
        <p style={{ visibility: initSearch ? "visible" : "hidden" }}>
          This is not a pokemon
        </p>
      ) : (
        <Link to={`/pokemon/${search}`}>
          <SearchBackground className={primaryType}>
            <SearchResult>
              <ImgContainer>
                <Img src={pokemonData.sprites.other.showdown.front_default} />
              </ImgContainer>
              <span>Go to Pokémon page</span>
            </SearchResult>
          </SearchBackground>
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Input = styled.input`
  height: 3rem;
  width: 20rem;
  border-radius: 0.8rem;
  background-color: #3d7dca;
  color: #f6eb61;
  font-size: 1.8rem;
  &::placeholder {
    color: #f6eb61;
    padding-left: 0.6rem;
  }
`;

const SearchResult = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );

  span {
    color: #000000;
    padding: 0.5rem 0;
  }
`;

const SearchBackground = styled.div`
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgContainer = styled.div`
  width: 5rem;
  height: auto;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
