import { Routes, Route } from "react-router-dom";
import { Pokedex } from "../components/pokedex";
import { PokemonPage } from "./PokemonPage";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Pokedex />}/>
            <Route path="/pokemon/:name" element={<PokemonPage />}/>
        </Routes>
    )
}