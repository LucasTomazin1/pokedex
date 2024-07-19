import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeButton
      onClick={() => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
        console.log(theme);
      }}
    >
      <SunMoon icon={theme.themeTag} style={{ color: theme.color }} />
    </ThemeButton>
  );
};

const ThemeButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: none;
`;

const SunMoon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: inherit;
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;
