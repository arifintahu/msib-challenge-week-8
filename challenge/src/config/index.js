require('dotenv').config();

const config = {
    PORT: parseInt(process.env.PORT) || 3000,
    API: process.env.API || "api/v1",
    OMDB_KEY: process.env.OMDB_KEY || "faf7e5bb",
    OMDB_API: process.env.OMDB_API || "http://www.omdbapi.com",
};
  
module.exports = config;
