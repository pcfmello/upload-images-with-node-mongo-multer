const express = require("express");
const app = express();

require("dotenv").config();
require("./database");

const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");
app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log("Servidor rodando na porta ", port);
});
