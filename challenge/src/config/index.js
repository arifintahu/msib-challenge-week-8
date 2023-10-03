const config = {
    PORT: parseInt(process.env.PORT) || 3000,
    OMDB_KEY: process.env.OMDB_KEY || "faf7e5bb",
    OMDB_API: process.env.OMDB_API || "http://www.omdbapi.com",
    DB_URL: process.env.DB_URL || "",
};
  
module.exports = config;
