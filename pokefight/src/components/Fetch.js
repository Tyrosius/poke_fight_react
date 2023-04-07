const getPokemons = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
  } catch (err) {
    console.log(err);
  }
};

export default getPokemons;
