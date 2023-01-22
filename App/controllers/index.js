/**
 * ========================================================================================
 * CONTROLLER
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
 * OBJECT EXPORT
 * ========================================================================================
 */
module.exports = {
  getHome,
  getConnexion,
};
