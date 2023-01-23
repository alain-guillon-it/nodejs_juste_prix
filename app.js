/**
 * ========================================================================================
 * DEPENDANCIES
 * ========================================================================================
 */
require("colors");
require("dotenv").config();
const boxen = require("boxen");
const morgan = require("morgan");
const { join } = require("path");
const favicon = require("serve-favicon");
const cookieSession = require("cookie-session");
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
// app.set("views", join(__dirname, "autre_folder"));

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
app.use(morgan("dev"));
app.use(favicon(join(__dirname, "public", "favicon", "favicon.ico")));
/**
 * secure: recommandé d'être à true pour un site en https
 * resave: Force la resauvegarde de la session même si pas modifié à mettre à false
 * maxAge: 60 * 1000 correspond à 1 minute en milliseconde
 **/
app.use(
  cookieSession({
    secret: process.env.SECRET_SESSION,
    secure: false,
  })
);
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

/**
 * ========================================================================================
 * USED MIDDLEWARE WITH AN USING OF ROUTING
 * ========================================================================================
 */
app.use("/", myRouter);

app.use("/error/:code", (req, res) => {
  res.status(Number(req.params.code)).json({
    errorCode: req.params.code,
  });
});

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
          left: 10,
          right: 10,
          bottom: 1,
        },
        margin: {
          top: 2,
          bottom: 2,
        },
        dimBorder: true,
        float: "center",
        backgroundColor: "",
      }
    )
  )
);
