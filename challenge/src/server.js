const express = require("express");
const routes = require("./routes");
const { API } = require("./config");

function createServer() {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(`/${API}`, routes);

    return app;
}

module.exports = createServer;
