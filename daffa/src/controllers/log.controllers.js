const { logServices } = require("../services");

async function getLogs(req, res) {
  const page = req.query.page;
  const per_page = req.query.per_page;
  try {
    const result = await logServices.getLogs({
      page : page,
      per_page : per_page,
    });
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getLogById(req, res) {
  const id = parseInt(req.params.id)
  try {
    const result = await logServices.getLogById(id);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
    getLogById,
    getLogs
};
