import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemons] = useState();

  const getPokemons = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json;
      setPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Hello Poke Fight</h1>
    </div>
  );
}

export default App;
