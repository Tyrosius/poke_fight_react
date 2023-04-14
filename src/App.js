import "./App.css";
import "./DetailCard.scss";
import { useState, useEffect } from "react";
import { getPokemons } from "./components/Fetch";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./components/Pages/Home";
import Arena from "./components/Pages/Arena";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/Pages/ErrorPage";
import DetailCard from "./components/DetailCard";

function App() {
  const [pokemons, setPokemons] = useState(); // all  Pokemons for Pokedex
  const [pokemonDetails, setPokemonDetails] = useState(); //choose a single Pokemon for details
  const [status, setStatus] = useState(false); //state for login

  useEffect(() => {
    //get all pokemons for the pokedex on the home page
    getPokemons(
      "https://poke-fight-api-wdg009-g1.onrender.com/pokemon",
      setPokemons
    );
  }, []);

  console.log(pokemons);

  return (
    <div className="App">
      <Navbar />

      <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home pokemons={pokemons} />} />
          <Route
            exact
            path="/pokemon/:id"
            element={
              <DetailCard
                setPokemonDetails={setPokemonDetails}
                pokemonDetails={pokemonDetails}
              />
            }
          />
          <Route path="/arena" element={<Arena />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
