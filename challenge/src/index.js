const createServer = require("./server");
const { PORT } = require("./config");

function startServer() {
    const app = createServer();
    return app.listen(PORT, () => {
        console.info(`Server is listening on port ${PORT}`);
    });
}
  
startServer();
