const createServer = require("./server");
const { PORT } = require("./config");
const { initializeDb } = require("./utils/database");

function startServer() {
  const app = createServer();
  return app.listen(PORT, async () => {
    try {
      await initializeDb();
      console.info(`Server is listening on port ${PORT}`);
    } catch (err) {
      console.error("Cannot start server", err);
      process.exit(1);
    }
  });
}

startServer();
