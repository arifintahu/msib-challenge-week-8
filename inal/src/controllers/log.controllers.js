const { logServices } = require('../services');

async function getLogs(req, res) {
  const page = req.query.page;
  const perPage = req.query.per_page;
  
  try {
    const result = await logServices.getLogs(page, perPage);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getLogById(req, res) {
    const id = req.params.id
    try {
        const result = await logServices.getLogById(id)
        res.json(result)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }


module.exports = { getLogs, getLogById };
