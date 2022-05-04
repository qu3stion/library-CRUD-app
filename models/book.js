const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: String,
  genres: [String],
  ISBN: String,
  imageLink: String,
}, { collection: "books" });

const Book = mongoose.model("Book", bookSchema)
module.exports = Book