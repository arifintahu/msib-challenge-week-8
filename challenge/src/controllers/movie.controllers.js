const { movieServices } = require("../services");

async function searchMovies(req, res) {
  const key = req.query.key;
  const page = req.query.page;
  try {
    const result = await movieServices.searchMovies({
      key: key,
      page: page ? page : 1,
    });
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getMovieById(req, res) {
  const id = req.params.id;
  try {
    const result = await movieServices.getMovieById(id);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  searchMovies,
  getMovieById,
};
