import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

config(); // Initialize dotenv

const app = express();

const url = process.env.MONGO_URL;
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  }
};

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
