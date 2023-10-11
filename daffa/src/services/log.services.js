const { logRepositories } = require("../repositories");

async function createLog(method, endpoint) {
  if (!method && !endpoint) {
    return Promise.reject(new Error("Invalid arguments"));
  }
  const response = await logRepositories.createLog({
    method,
    endpoint,
  });
  return response;
}

// TODO: Add method getLogs
async function getLogs(res) {
  const response = await logRepositories.getLogs(res)
  return response
}
// TODO: Add method getLogById
async function getLogById(id) {
  if(!id) {
    return Promise.reject(new Error("Id null..."))
  }
  const response = await logRepositories.getLogById(id)
  return response
}
module.exports = {
  createLog,
  getLogs,
  getLogById,
};
