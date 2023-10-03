const { logServices } = require("../services");

async function logging(req, res, next) {
  try {
    await logServices.createLog(req.method, req.originalUrl);
    next();
  } catch (err) {
    res.status(404).end();
  }
}

module.exports = logging;
