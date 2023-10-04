const fetch = require("node-fetch");
const { OMDB_KEY, OMDB_API } = require("../config");

async function searchMovies(params) {
  const { key, page } = params;
  const response = await fetch(
    `${OMDB_API}/?apikey=${OMDB_KEY}&s=${key}&page=${page}`,
  );
  const result = await response.json();
  if (result.Response === "False") {
    return Promise.reject(new Error(result.Error));
  }
  return result;
}

async function getMovieById(id) {
  const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&i=${id}`);
  const result = await response.json();
  if (result.Response === "False") {
    return Promise.reject(new Error(result.Error));
  }
  return result;
}

module.exports = {
  searchMovies,
  getMovieById,
};
