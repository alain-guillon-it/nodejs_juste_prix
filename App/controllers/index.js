/**
 * ========================================================================================
 * CONSTANTES
 * ========================================================================================
 */
const adminLogin = process.env.ADMIN_PSEUDO;
const adminPassword = process.env.ADMIN_PASSWORD;

function myOptions(
  request,
  title,
  h1,
  errorStatus = null,
  errorCode = null,
  errorMessage = null
) {
  const options = {
    data: {
      error: {
        errorStatus,
        errorCode,
        errorMessage,
      },
      header: {
        title,
        connected: {
          admin:
            adminLogin === request.session.adminLogin &&
            adminPassword === request.session.adminPassword
              ? true
              : false,
          username: request.session.userLogin ? true : false,
        },
      },
      body: {
        h1,
        userLogin: request.session.userLogin ?? null,
        adminLogin: request.session.adminLogin ?? null,
      },
      game: {
        objectName: request.session.objectName ?? null,
        objectDescription: request.session.objectDescription ?? null,
        objectCover: request.session.objectCover ?? null,
        objectPrice: request.session.objectPrice ?? null,
        tries: request.session.tries ?? null,
      },
    },
  };
  return options;
}

/**
 * ========================================================================================
 * CONTROLLERS GET
 * ========================================================================================
 */
const getHome = (req, res) => {
  console.log(process.env.TOTO);
  const result = myOptions(req, "Page d'accueil", "Bienvenue sur ce jeu");
  res.status(200).render("pages/HomeView", result);
};
const redirectGetLogin = (req, res) => {
  if (req.url == "/login") {
    res.redirect("/");
  }
};
const getLogin = (req, res) => {
  if (req.url == "/login/admin") {
    const result = myOptions(req, "Connexion", "Connexion Administrateur");
    res.status(200).render("pages/LoginAdminView", result);
  } else if (req.url == "/login/username") {
    const result = myOptions(req, "Username", "Nom du joueur");
    res.status(200).render("pages/UsernameView", result);
  }
};

const getPlay = (req, res) => {
  res
    .status(200)
    .render("pages/PlayView", myOptions(req, "Jouer", "Joue au juste prix"));
};
const getPlayConfig = (req, res) => {
  const result = myOptions(req, "Configuration", "Configuration du jeu");
  res.status(200).render("pages/PlayConfigView", result);
};
const getLogout = (req, res) => {
  req.session = null;
  res.redirect("/");
};

/**
 * ========================================================================================
 * CONTROLLERS POST
 * ========================================================================================
 */
const postLogin = (req, res) => {
  console.log({
    url: req.url,
    params: req.params.role,
  });

  if (req.url == "/login/admin" && req.params.role == "admin") {
    const inputAdminLogin = req.body.login;
    const inputAdminPassword = req.body.password;
    const compareAdminLogin = inputAdminLogin == adminLogin ? true : false;
    const compareAdminPassword =
      inputAdminPassword == adminPassword ? true : false;
    console.log({
      inputLogin: inputAdminLogin,
      inputPassword: inputAdminPassword,
      adminLogin,
      adminPassword,
      compareAdminLogin: inputAdminLogin == adminLogin ? true : false,
      compareAdminPassword: inputAdminPassword == adminPassword ? true : false,
    });
    if (compareAdminLogin && compareAdminPassword) {
      req.session.adminLogin = inputAdminLogin;
      req.session.adminPassword = inputAdminPassword;
      res.redirect("/login/username");
    }
  } else if (req.url == "/login/username" && req.params.role == "username") {
    const inputUserLogin = req.body.login;
    req.session.userLogin = inputUserLogin;
    console.log({
      inputUserLogin: req.session.userLogin,
    });
    res.redirect("/play/config");
  }
};

const postPlay = (req, res) => {
  res.status(200).send("Play");
};
const postPlayConfigCreate = (req, res) => {
  const objectName = req.body.name;
  const objectCover = req.body.cover;
  const objectDescription = req.body.description;
  const objectPrice = req.body.price;
  const tentative = req.body.tentative;

  req.session.objectName = objectName;
  req.session.objectCover = objectCover;
  req.session.objectDescription = objectDescription;
  req.session.objectPrice = Number(objectPrice);
  req.session.tries = Number(tentative);

  res.redirect("/play");
};
const postPlayConfigDelete = (req, res) => {
  res.status(200).send("Play Config Delete");
};

/**
 * ========================================================================================
 * OBJECT EXPORT
 * ========================================================================================
 */
module.exports = {
  getHome,
  redirectGetLogin,
  getLogin,
  getPlay,
  getPlayConfig,
  getLogout,
  postLogin,
  postPlay,
  postPlayConfigCreate,
  postPlayConfigDelete,
};
