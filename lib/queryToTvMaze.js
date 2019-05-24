const fetch = require("node-fetch");

const getMoviesData = async ( date ) => {
  try {
    const response = await fetch(
      `http://api.tvmaze.com/schedule?country=US&date=${date}`,
    )
    .then((data) => data.json());
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getMoviesData;
