const { logRepositories } = require("../repositories");

async function createLog(method, endpoint) {
    if (!method && !endpoint) {
        return Promise.reject(new Error("Invalid arguments"))
    }
    const response = await logRepositories.createLog({
        method,
        endpoint,
    })
    return response;
}

module.exports = {
    createLog,
};
