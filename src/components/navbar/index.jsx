import { useContext } from "react";
import { Searchbar } from "../searchbar";
import { ThemeTogglerButton } from "../theme-toggler-buuton";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";
import logo from "../../assets/pokemon.png";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Container style={{ background: theme.navbarBackground }}>
        <img src={logo} alt="Logo do Pokemon" />

        <Searchbar />
        <ThemeTogglerButton />
      </Container>
    </>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  border-bottom: 2px solid #3d7dca;

  @media (max-width: 1024px) {
    padding: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.4rem;
  }

  @media (max-width: 320px) {
    padding: 0.2rem;
  }
  img {
    width: 20rem;
    @media (max-width: 1024px) {
      width: 18rem;
    }

    @media (max-width: 768px) {
      width: 16rem;
    }

    @media (max-width: 425px) {
      width: 14rem;
    }

    @media (max-width: 320px) {
      width: 12rem;
    }
  }
`;
