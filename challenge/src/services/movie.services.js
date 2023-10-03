const fetch = require("node-fetch");
const { OMDB_KEY, OMDB_API } = require("../config");

async function searchMovies(params) {
    const { key, page } = params;
    const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&s=${key}&page=${page}`);
    return response.json();
}

async function getMovieById(id) {
    const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&i=${id}`);
    return response.json();
}

module.exports = {
    searchMovies,
    getMovieById,
};
