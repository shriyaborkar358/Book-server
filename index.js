import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import cors from 'cors'

import { getHealth } from "./controller/health.js";
import {
  postBook,
  getBooks,
  getBookId,
  putBookId,
  deleteBookId,
} from "./controller/book.js";

import { handlePageNotFound } from "./controller/error.js";

const app = express();
app.use(cors())
app.use(express.json());

const dbConnection = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL)

  if (conn) {
    console.log(`MongoDb connected ✔️`);
  } else {
    console.log(`MongoDb not connected ✖️`);
  }
};
dbConnection();

app.get("/health", getHealth);

app.post("/book", postBook);
app.get("/books", getBooks);
app.get("/book/:id", getBookId);
app.put("/book/:id", putBookId);
app.delete("/book/:id", deleteBookId);

app.use("*", handlePageNotFound);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
