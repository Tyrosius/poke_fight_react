import "./App.css";
import "./DetailCard.scss";

import { useState, useEffect } from "react";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getPokemons } from "./components/Fetch";
import { Routes, Route, useParams } from "react-router-dom";
import {getUser} from "./utils/auth"

import Home from "./components/Pages/Home";
import Arena from "./components/Pages/Arena";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/Pages/ErrorPage";
import DetailCard from "./components/DetailCard";

function App() {
  const [pokedex, setPokedex] = useState(); // all  Pokemons for Pokedex
  const [pokemonDetails, setPokemonDetails] = useState(); //choose a single Pokemon for details
  const [status, setStatus] = useState(false); //state for login
  const [token,setToken]=useState(localStorage.getItem('token'));
  const [user,setUser]=useState(null);
  const [pokemonID, setPokemonID] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const validateToken = async () => {
      try {
        setLoading(true);
        const { data, error } = await getUser(token);
        if (error) throw error;
        setUser(data);
        status(true);
        setLoading(false);
      } catch (error) {
        localStorage.removeItem('token');
        setToken(null);
        setLoading(false);
        toast.error(error.message);      }
    };
    token && validateToken();
  },[token]);

  useEffect(() => {
    setLoading(true);
    //get all pokemons for the pokedex on the home page
    getPokemons(
      "https://poke-fight-api-wdg009-g1.onrender.com/pokemon",
      setPokedex
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    //get all pokemons for the pokedex on the home page
    getPokemons(
      `https://poke-fight-api-wdg009-g1.onrender.com/pokemon/${pokemonID}`,
      setPokemonDetails
    );
    setLoading(false);
  }, [pokemonID]);

  console.log("all pokemons:", pokedex);
  console.log("PokeID:", pokemonID);

  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />

      <div className="pages">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                pokemons={pokedex}
                setPokemonDetails={setPokemonDetails}
                setPokemonID={setPokemonID}
                loading={loading}
              />
            }
          />
          <Route
            exact
            path="/pokemons/:id"
            element={
              <DetailCard
                setPokemonDetails={setPokemonDetails}
                pokemonDetails={pokemonDetails}
                pokemonID={pokemonID}
                setPokemonID={setPokemonID}
              />
            }
          />
          <Route path="/arena" element={<Arena />} />
          <Route path="/register" element={<Register status={status} setStatus={setStatus} setToken={setToken} loading={loading} setLoading={setLoading}  />} />
          <Route path="/login" element={<Login status={status} setStatus={setStatus} setToken={setToken} loading={loading} setLoading={setLoading} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
