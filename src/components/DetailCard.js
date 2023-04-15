import { useEffect } from "react";
import { getPokemons } from "./Fetch";
import { Link } from "react-router-dom";

export default function DetailCard({
  setPokemonDetails,
  pokemonDetails,
  pokemonID,
  setPokemonID,
}) {
  //der useeffect muss eine Etage nach oben und vermutlich in ein onClick-Event o.ä. verschoben werden - je nach Aufbau der 8er Karten.
  // useEffect(() => {
  //   getPokemons(
  //     "https://poke-fight-api-wdg009-g1.onrender.com/pokemon/3", //hier muss der Code noch dynamisch angepasst werden mit useParams...
  //     setPokemonDetails
  //   );
  // }, []);

  return (
    <section className="sectionDetails">
      <div className="detailContainer">
        <Link className="link2Overview" to={`/`}>
          <div>
            X
            {/* <span className="x1"></span>
            <span className="x2"></span> */}
          </div>
        </Link>
        <div className="upperPart">
          <img
            className="pokemonImage"
            src={pokemonDetails?.pic}
            alt={pokemonDetails?.name}
          ></img>
          <div className="upperPartRight">
            <h5>{pokemonDetails?.name}</h5>
            {pokemonDetails?.type.map((el) => {
              console.log(pokemonDetails.type);
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
      <div className="prevNext">
        <Link
          className="link2Previous"
          to={`/pokemons/${pokemonID - 1}`} // this calculation is not working!
          onClick={(e) => {
            e.preventDefault();
            const newID = pokemonID - 1;
            setPokemonID(newID);
            const url = `https://poke-fight-api-wdg009-g1.onrender.com/pokemon/${newID}`;
            console.log("url:", url);
            getPokemons(url, setPokemonDetails);
          }}
        >
          {"< .."}
        </Link>
        <Link
          className="link2Previous"
          to={`/pokemons/${pokemonID + 1}`} // this calculation is not working!
          onClick={(e) => {
            e.preventDefault();
            const newID = pokemonID + 1;
            setPokemonID(newID);
            const url = `https://poke-fight-api-wdg009-g1.onrender.com/pokemon/${newID}`;
            console.log("url:", newID);
            getPokemons(url, setPokemonDetails);
          }}
        >
          {". >"}
        </Link>
      </div>
    </section>
  );
}
