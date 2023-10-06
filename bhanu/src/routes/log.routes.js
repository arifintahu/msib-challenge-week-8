const { Router } = require("express");
const { logControllers } = require("../controllers");

const router = Router();

router.get("/", (req, res) => {
    logControllers.getLogs(req, res);
});
router.get("/:id", (req, res) => {
    logControllers.getLogById(req, res);
});

module.exports = router;