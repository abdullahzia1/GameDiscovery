import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./Config/db.js";

import taskRoutes from "./routes/taskRoutes.js";

import { errorHandler, notFound } from "./middleware/errorHandler.js";

const port = process.env.PORT || 5000;
connectDB();

const app = express();

// Middleware
app.use(express.json());

// CORS setup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/api/tasks", taskRoutes);

// Error handling middleware
app.use(notFound); // 404 error handler
app.use(errorHandler); // 500 internal server error handler

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
