import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(
  bodyParser.json({ limit: "500mb", extended: true, type: "application/json" })
);
app.use("/api/users", userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server running on :" + PORT)))
  .catch((error) => console.log(error.message));

export { app };
