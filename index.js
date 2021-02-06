//* Import Server
const server = require("./api/server");

//* Specify PORT to use
const PORT = 5000;

//* Start server
server.listen(PORT, () => {
  console.log(`\n=== Server started at http://localhost:${PORT} ===\n`);
});
