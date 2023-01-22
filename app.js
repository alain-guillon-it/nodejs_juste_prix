/**
 * ========================================================================================
 * DEPENDANCIES
 * ========================================================================================
 */
require("colors");
require("dotenv").config();
const boxen = require("boxen");
const { join } = require("path");
const favicon = require("serve-favicon");
const expressSession = require("express-session");
const express = require("express");

/**
 * ========================================================================================
 * EXPRESS, PORT AND HOSTNAME INITIALIZED
 * ========================================================================================
 */
const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME ?? ("localhost" || "127.0.0.1");

/**
 * ========================================================================================
 * EJS CONFIGURATION
 * ========================================================================================
 */
app.set("view engine", "ejs");
// app.set("views", join(__dirname, "autres_folder"));

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
 * secure: recommandé d'être à true pour un site en https
 * resave: Force la resauvegarde de la session même si pas modifié à mettre à false
 * maxAge: 60000 correspond à 1 minute en milliseconde
 **/
app.use(
  expressSession({
    secret: process.env.SECRET_SESSION,
    secure: true,
    resave: false,
    maxAge: 60000,
  })
);
app.use(express.static(join(__dirname, "public")));

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
