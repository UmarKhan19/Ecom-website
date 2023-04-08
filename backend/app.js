const cookieParser = require("cookie-parser");
const express = require("express");

const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

const user = require("./routes/userRoute");
app.use("/api/v1", user);

const order = require("./routes/orderRoute");
app.use("/api/v1", order);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
