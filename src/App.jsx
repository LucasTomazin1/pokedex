
import { Pokedex } from "./components/pokedex";
import { Navbar } from "./components/navbar";
import { GlobalStyle } from "./components/global-style";
import { ThemeProvider } from "./contexts/theme-context";
import { Footer } from "./components/footer";

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navbar />
      <Pokedex />
      <Footer />
    </ThemeProvider>
  );
}


export default App;
