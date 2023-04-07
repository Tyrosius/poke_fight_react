import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [pokemon, setPokemons] = useState();

  const getPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons("http://localhost:8000/");
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <h1>Hello Poke Fight</h1>
      {pokemon && <Card />}
      <Footer />
    </div>
  );
}

export default App;
