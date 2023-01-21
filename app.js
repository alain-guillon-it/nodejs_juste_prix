/**
 * ========================================================================================
 * DEPENDANCIES
 * ========================================================================================
 */
require("colors");
const boxen = require("boxen");
const { join } = require("path");
const favicon = require("serve-favicon");
const express = require("express");

/**
 * ========================================================================================
 * EXPRESS, PORT AND HOSTNAME INITIALIZED
 * ========================================================================================
 */
const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME ?? ("localhost" || "127.0.0.1");

app.set("view engine", "ejs");

/**
 * ========================================================================================
 * ROUTER
 * ========================================================================================
 */
const myRouter = require("./router/index.routes");

/**
 * ========================================================================================
 * MIDDLEWARES
 * ========================================================================================
 */
app.use(favicon(join(__dirname, "public", "favicon", "favicon.ico")));

/**
 * ========================================================================================
 * USED MIDDLEWARE WITH AN USING OF ROUTING
 * ========================================================================================
 */
app.use("/", myRouter);

/**
 * ========================================================================================
 * SERVER STARTED AT
 * ========================================================================================
 */
app.listen(PORT, () =>
  console.log(
    boxen(
      `Server has been started at http://${HOSTNAME.red}:${PORT.cyan}`.gray
        .bold,
      {
        title: "Status Connexion".blue,
        borderStyle: "classic",
        borderColor: "yellow",
        padding: {
          top: 1,
          left: 1,
          right: 1,
          bottom: 1,
        },
        margin: {
          top: 1,
          bottom: 1,
        },
        dimBorder: true,
        float: "center",
        backgroundColor: "",
      }
    )
  )
);
