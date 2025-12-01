const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Worldsss!</h1>");
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM, shutting down...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
