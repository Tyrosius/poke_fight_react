import "../App.css";
import { Link } from "react-router-dom";
import { getPokemons } from "./Fetch";

export default function Card({ pokemons, setPokemonDetails, setPokemonID }) {
  return (
    <>
      <section>
        <div className="cont">
          {/* <div className="about">
            <h4 className="title"></h4>
          </div> */}
          {pokemons &&
            pokemons.map((el) => {
              let ID = el.url.split("/");
              ID = Number(ID[6]); //hard coded 6, hopefully always correct

              return (
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="../../public/images/picmix.com_2045971.png"
                      alt="pokemon"
                    />
                  </div>
                  <div className="contentBx">
                    <h2>{el.name}</h2>
                    <div className="color">
                      {/* <h3>element :</h3>
                      <span></span>
                      <span></span>
                      <span></span> */}
                    </div>
                    <Link
                      className="link2Details"
                      id={`${ID}`}
                      to={`/pokemons/${ID}`}
                      onClick={(e, id) => {
                        const url = `https://poke-fight-api-wdg009-g1.onrender.com/pokemon/${e.currentTarget.id}`;

                        setPokemonID(Number(e.currentTarget.id));

                        getPokemons(url, setPokemonDetails);
                      }}
                    >
                      <p>View Details</p>
                    </Link>
                    {/* <a href="#">Insert list</a> */}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      ;
    </>
  );
}
