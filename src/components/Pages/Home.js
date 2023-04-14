import Card from "../Card";
import Header from "../Header";

export default function Home({ pokemons }) {
  return (
    <div>
      <Header />
      <Card pokemons={pokemons} />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
