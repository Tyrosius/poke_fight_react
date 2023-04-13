export default function DetailCard() {
  const data = {
    name: "Bisasam",
    stats: [
      { hp: 45 },
      { attack: 49 },
      { defence: 49 },
      { spAttack: 65 },
      { spDefence: 65 },
      { speed: 45 },
    ],
    pic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: ["poison", "plant"],
  };

  return (
    <section>
      <div className="detailContainer">
        <div className="upperPart">
          <img
            className="pokemonImage"
            src="https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBva2Vtb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          ></img>
          <div className="upperPartRight">
            <h5>{data.name}</h5>
            {data.type.map((el) => {
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
            {data.stats.map((el) => {
              const percentage = (Object.values(el) * 100) / 155;
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
