const { Router } = require("express");
const movieRoutes = require("./movie.routes");

const router = Router();

router.use("/movies", movieRoutes);

// TODO: Add router logRoutes

module.exports = router;
