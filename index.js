const express = require("express");
const app = express();
const getTextLine = require("./router/getTextLine");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/webhook", getTextLine);

app.listen(8000, () => {
  console.log("Server is running");
});
