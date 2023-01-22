/**
 * ========================================================================================
 * CONTROLLERS GET
 * ========================================================================================
 */
const getHome = (_, res) => {
  res.status(200).render("pages/HomeView", {
    data: {
      header: {
        title: "Page d'accueil",
      },
      body: {
        h1: "Le juste Prix avec NodeJS",
      },
    },
  });
};
const getConnexion = (_, res) => {
  res.status(200).render("pages/LoginView", {
    data: {
      header: {
        title: "Connexion",
      },
      body: {
        h1: "Connexion",
      },
    },
  });
};

/**
 * ========================================================================================
 * CONTROLLERS POST
 * ========================================================================================
 */
const postConnexion = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  if (
    process.env.ADMIN_PSEUDO === login &&
    process.env.ADMIN_PASSWORD === password
  ) {
    console.log({
      body: req.body,
      loginAdmin: process.env.ADMIN_PSEUDO,
      passwordAdmin: process.env.ADMIN_PASSWORD,
    });

    res.status(200);
    res.redirect("/play/configuration");
  } else {
    console.log({
      body: req.body,
      login,
      password,
    });

    req.session.login = login;
    req.session.password = password;
    res.status(200);
    res.json({
      info: {
        pseudo: req.session.login,
        password: req.session.password,
      },
    });
  }

  // res.status(200).render("pages/LoginView", {
  //   data: {
  //     header: {
  //       title: "Connexion",
  //     },
  //     body: {
  //       h1: "Connexion",
  //     },
  //   },
  // });
};

/**
 * ========================================================================================
 * OBJECT EXPORT
 * ========================================================================================
 */
module.exports = {
  getHome,
  getConnexion,
  postConnexion,
};
