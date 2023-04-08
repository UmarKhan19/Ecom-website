const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log("Error: " + err);
  console.log("Shutting down the server due to Unhandled promise rejection");
  process.exit(1);
});

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log("Error: " + err);
  console.log("Shutting down the server due to Unhandled promise rejection");
  server.close(() => process.exit(1));
});
