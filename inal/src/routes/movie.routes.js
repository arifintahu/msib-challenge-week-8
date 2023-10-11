const { Router } = require("express");
const { movieControllers } = require("../controllers");
const { logging } = require("../middlewares");

const router = Router();

router.get("/", [logging], (req, res) => {
  movieControllers.searchMovies(req, res);
});
router.get("/:id", [logging], (req, res) => {
  movieControllers.getMovieById(req, res);
});

module.exports = router;
