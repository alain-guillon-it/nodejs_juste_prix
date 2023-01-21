const express = require("express");
const app = express();

const myRouter = require("./router/index.routes");

app.use("/", myRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server has been started at http://localhost:${process.env.PORT}`)
);
