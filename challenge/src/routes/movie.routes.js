const { Router } = require("express");
const { movieControllers } = require("../controllers");

const router = Router();

router.get("/", [], (req, res) => {
    movieControllers.searchMovies(req, res);
});
router.get("/:id", [], (req, res) => {
    movieControllers.getMovieById(req, res);
});

module.exports = router;
