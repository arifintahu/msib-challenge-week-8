const { Router } = require("express");
const movieRoutes = require("./movie.routes");
const logRouters = require("./log.routes")

const router = Router();

router.use("/movies", movieRoutes);
// TODO: Add router logRoutes
router.use("/logs", logRouters);

module.exports = router;
