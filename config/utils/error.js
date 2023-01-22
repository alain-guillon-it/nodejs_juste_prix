const options = {
  errorOptions: {
    200: {
      message: "La requête a réussi et a retourné les données demandées",
      status: "OK",
      code: 200,
    },
    201: {
      message: "La requête a réussi et a créé un nouveau ressource",
      status: "Created",
      code: 201,
    },
    204: {
      message: "La requête a réussi mais il n'y a pas de contenu à retourner",
      status: "No Content",
      code: 204,
    },
    400: {
      message:
        "La requête a échoué car il y a des erreurs dans la syntaxe ou les données envoyées.",
      status: "Bad Request",
      code: 401,
    },
    401: {
      message:
        "La requête a échoué car l'utilisateur n'est pas authentifié ou n'a pas les autorisations nécessaires",
      status: "Unauthorized",
      code: 401,
    },
    403: {
      message:
        "La requête a échoué car l'utilisateur est authentifié mais n'a pas les autorisations nécessaires pour accéder à la ressource.",
      status: "Forbidden",
      code: 403,
    },
    404: {
      message: "La requête a échoué car la ressource demandée est introuvable.",
      status: "Not Found",
      code: 404,
    },
    500: {
      message: "La requête a échoué en raison d'une erreur interne du serveur.",
      status: "Internal Server Error",
      code: 500,
    },
    502: {
      message:
        "La requête a échoué car le serveur a reçu une réponse incorrecte d'un autre serveur",
      status: "Bad Gateway",
      code: 502,
    },
    503: {
      message:
        "La requête a échoué car le serveur est temporairement indisponible.",
      status: "Service Unavailable",
      code: 503,
    },
  },
};
