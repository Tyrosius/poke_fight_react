import Card from "../Card";
import Header from "../Header";
import { Circles } from "react-loader-spinner";

export default function Home({
  pokemons,
  setPokemonDetails,
  setPokemonID,
  loading,
}) {
  return (
    <div>
      <Header />
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      <Card
        pokemons={pokemons}
        setPokemonDetails={setPokemonDetails}
        setPokemonID={setPokemonID}
      />
    </div>
  );
}
