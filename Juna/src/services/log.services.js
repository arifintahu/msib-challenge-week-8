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
async function getLogs(params) {
  const response = await logRepositories.getLogs(params);
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

// TODO: Add method getLogById
async function getLogById(id) {
  const response = await logRepositories.getLogById(id);
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

module.exports = {
  createLog,
  getLogs,
  getLogById
};
