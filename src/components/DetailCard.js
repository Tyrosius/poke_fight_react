import { useEffect } from "react";
import { getPokemons } from "./Fetch";

export default function DetailCard({ setPokemonDetails, pokemonDetails }) {
  //der useeffect muss eine Etage nach oben und vermutlich in ein onClick-Event o.ä. verschoben werden - je nach Aufbau der 8er Karten.
  useEffect(() => {
    getPokemons(
      "https://poke-fight-api-wdg009-g1.onrender.com/pokemon/3", //hier muss der Code noch dynamisch angepasst werden mit useParams...
      setPokemonDetails
    );
  }, []);

  return (
    <section>
      <div className="detailContainer">
        <div className="upperPart">
          <img
            className="pokemonImage"
            src={pokemonDetails?.pic}
            alt={pokemonDetails?.name}
          ></img>
          <div className="upperPartRight">
            <h5>{pokemonDetails?.name}</h5>
            {pokemonDetails?.type.map((el) => {
              return (
                <p className="types" id={el}>
                  {el}
                </p>
              );
            })}
          </div>
        </div>
        <div className="lowerPart">
          <div className="lowerPartGrid">
            {pokemonDetails?.stats.map((el) => {
              const percentage = (Object.values(el) * 100) / 155; //155 entspricht dem höchten Wert, was hier als 100% gesetzt wird.
              return (
                <>
                  <p>{Object.keys(el)}</p>
                  <p>{Object.values(el)}</p>
                  <span className="bar">
                    <div
                      className="barColored"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
