const getHome = (_, res) => {
  res.status(200).send("coucou");
};

module.exports = {
  getHome,
};
