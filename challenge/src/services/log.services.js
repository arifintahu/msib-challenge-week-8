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

// TODO: Add method getLogById

module.exports = {
  createLog,
};
