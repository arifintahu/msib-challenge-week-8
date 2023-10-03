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
        const perPage = params.per_page || 10;
        db.all(`SELECT * FROM logs LIMIT ${page * perPage} OFFSET ${(page - 1) * perPage}`, (err, rows) => {
            console.error(err, rows)
            if (err) {
                reject(err);
            }
            resolve(rows);
        })
    });
}

module.exports = {
  createLog,
  getLogs,
};
