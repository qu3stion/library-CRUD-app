const express = require("express");
const mongoose = require("mongoose");
const libraryRouter = require("./routes/libraryRoutes.js");
require("dotenv").config();
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

PORT = 3001
// MONGO_URI = `mongodb+srv://m001-student:m001-mongodb-basics@sandbox.z7zi6.mongodb.net/
// myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(`mongodb+srv://m001-student:m001-mongodb-basics@sandbox.z7zi6.mongodb.net/
myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(libraryRouter);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
