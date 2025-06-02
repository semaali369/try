const express = require("express");
const booksRouter = require("./routes/booksRoutes");
const db = require("./db");
const app = express();
app.use(express.json()); //to read the body of req(from json to javascript obj)
app.use("/books", booksRouter);

app.listen(3000, () => console.log("listening in port 3000"));
