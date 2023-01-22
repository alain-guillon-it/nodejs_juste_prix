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
          user:
            request.session.userLogin && request.session.userPassword
              ? true
              : false,
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
  } else if (req.url == "/login/user") {
    const result = myOptions(req, "Connexion", "User Connexion");
    res.status(200).render("pages/LoginUserView", result);
  }
};

const getPlay = (req, res) => {
  res.redirect("/login/user");
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
      res.redirect("/login/user");
    }
  } else if (req.url == "/login/user" && req.params.role == "user") {
    const inputUserLogin = req.body.login;
    const inputUserPassword = req.body.password;
    req.session.userLogin = inputUserLogin;
    req.session.userPassword = inputUserPassword;

    console.log({
      inputUserLogin: req.session.userLogin,
      inputUserPassword: req.session.userPassword,
    });

    res.redirect("/play/config");
  }
};

const postPlay = (req, res) => {
  res.status(200).send("Play");
};
const postPlayConfigCreate = (req, res) => {
  res.status(200).send("Play Config Create");
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
