// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { GlobalStyle } from "./components/global-style";
import { ThemeProvider } from "./contexts/theme-context";
import { Footer } from "./components/footer";
import { AppRoutes } from "./pages/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
