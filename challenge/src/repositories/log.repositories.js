const { db } = require("../utils/database");

function createLog(params) {
    return new Promise((resolve, reject) => {
        const query = db.prepare("INSERT INTO logs (method, endpoint) VALUES (?, ?)", (err) => {
            reject(err);
        });
        query.run(params.method, params.endpoint);
        query.finalize((err) => {
            reject(err);
        });
        resolve();
    });
}

function getLogs(params) {
    return new Promise((resolve, reject) => {
        const page = params.page || 1;
        const per_page = params.per_page || 10;
        const query = db.prepare("SELECT * FROM logs LIMIT ?,?", (err) => {
            reject(err);
        });
        query.run((page - 1) * per_page, page * per_page);
        query.all((err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

module.exports = {
  createLog,
  getLogs,
};
