export const getPokemons = async (url, setState) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
    console.log("fetched-data:", data);
  } catch (err) {
    console.log(err);
  }
};
