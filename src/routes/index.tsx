import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from '../pages/Home';
import { PokemonItem } from "../components/PokemonItem";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/pokemon" element={<Home />} >
                <Route path="new" element={<h1> Teste </h1>} />
                <Route path=":name" element={<PokemonItem />} />
            </Route>
            <Route path="*" element={<Navigate to='/pokemon' />} />
        </Routes>
    )
}