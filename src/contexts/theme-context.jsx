import { createContext, useState } from "react";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const themes = {
  light: {
    bodyBackground: "#C0C0C0",
    color: "#121212",
    moveCard: "#121212",
    colorTextCard: "#C0C0C0",
    navbarBackground:
      "linear-gradient(to top, rgba(0, 0, 15, 0.4) 0%, rgba(255, 255, 255, 0.6) 100%)",
    footerBackground:
      "linear-gradient(to bottom, rgba(0, 0, 20, 0.1) 0%, rgba(255, 255, 255, .06) 100%)",
    textColor: "#000000",
    buttonHover: "#ffffff",
    themeTag: faMoon,
    cardShadow: "2px 2px 2px 2px  rgba(0, 0, 0, 0.5)",
  },
  dark: {
    bodyBackground: "#121212",
    color: "#C0C0C0",
    moveCard: "#C0C0C0",
    colorTextCard: "#121212",
    navbarBackground:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
    footerBackground:
      "linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%)",
    textColor: "#ffffff",
    buttonHover: "#091112",
    themeTag: faSun,
    cardShadow: "none",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
