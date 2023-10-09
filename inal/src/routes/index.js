const { Router } = require("express");
const movieRoutes = require("./movie.routes");
const logRoutes = require("./log.routes")
const router = Router();

// TODO: Add router logRoutes
router.use("/movies", movieRoutes);
router.use("/logs", logRoutes)


module.exports = router;
