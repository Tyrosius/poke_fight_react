import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokemons } from "./Fetch";
import SearchBar from "./SearchBar";
import ReactPaginate from "react-paginate";

export default function Card({ pokemons, setPokemonDetails, setPokemonID }) {
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [displayed, setDisplayed] = useState();

  const PokeCardsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + PokeCardsPerPage;
    setDisplayed(pokemons?.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(pokemons?.length / PokeCardsPerPage));
  }, [itemOffset]);

  const handleChange = (page) => {
    const newOffset = page.selected * PokeCardsPerPage;
    console.log(
      `User requested page number ${
        page.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <SearchBar />
      <section className="card-Section">
        <div className="cont">
          {/* <div className="about">
            <h4 className="title"></h4>
          </div> */}
          {pokemons &&
            pokemons.map((el) => {
              let ID = el.url.split("/");
              ID = Number(ID[6]); //hard coded 6, hopefully always correct

              return (
                <>
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
                </>
              );
            })}
        </div>
        <ReactPaginate
          nextLabel="Next >"
          previousLabel="< Previous"
          breakLabel="..."
          onPageChange={handleChange}
          pageCount={totalPages}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
        />
      </section>
    </>
  );
}
