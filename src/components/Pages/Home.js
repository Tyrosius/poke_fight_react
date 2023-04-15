import Card from "../Card";
import Header from "../Header";
import SearchBar from "../SearchBar";

export default function Home({ pokemons, setPokemonDetails, setPokemonID }) {
  return (
    <div>
      <Header />
      <SearchBar />
      <Card
        pokemons={pokemons}
        setPokemonDetails={setPokemonDetails}
        setPokemonID={setPokemonID}
      />
    </div>
  );
}
