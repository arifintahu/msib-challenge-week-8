const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

function initializeDb() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        `
                CREATE TABLE IF NOT EXISTS logs (
                    id INTEGER PRIMARY KEY NOT NULL,
                    method VARCHAR(255) NOT NULL,
                    endpoint TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
                )
            `,
        (result, err) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  });
}

module.exports = {
  initializeDb,
  db,
};
