import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name: String,
    image: String,
    category: String,
    price: Number,
    description: String
})

const Book = model("Book", bookSchema)

export default Book