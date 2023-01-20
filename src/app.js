const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("coucou");
});

app.listen(process.env.PORT, () =>
  console.log(`Server has been started at http://localhost:${process.env.PORT}`)
);
