# Le jeux du juste prix

Conception du jeu le juste prix avec NodeJS

## Idée du projet

L'idée du projet est de concevoir un programme qui permettrait de retrouver le prix d'un produit qui aurait été configurer en parallèle par un administrateur.

Il faudrait donc une partie connexion et configuration.

On pourrait accéder à une phase de configuration si nous disposons d'un compte spécifique à la configuration. La configuration comprendrait, le nom du produit, une désignation, un prix à trouver et probablement une image à gérer plus tard.

On pourrait gérer une liste de produit, la modifier ou supprimer un quelconque élement.

Une fois la partie configuration OK, nous pourrions lancer une partie et générer aléatoirement un produit à trouver

une fois le jeu lancé, le joueur devra rentrer son pseudo, et il pourra tenter de trouver le résultat selon un nombre spécifique de tentatives.

Si il trouve le résultat il gagne sinon il perd et donc un message sera afficher selon la situation du moment.

Une fois la partie terminer un bouton lui permettra de quitter ou recommencer sera visible à l'écran.

Si l'administrateur se déconnecte alors toutes les données seront perdue.
Ou bien en bonus si le temps le permet, il faudrait stocker le contenu des produit dans un fichier json.

## Evolution de l'application

- [x] - Ajout des middleware pour gérer la saisie dans les formulaires
- [x] - Création du controller postConnexion afin de découvrir ce que je récupère.
- [x] - Ajout controller getConnexion pour la partie connexion.
- [x] - Ajout de la page connexion plus implémentation de sa structure CSS
- [x] - Ajout du css pour la partie home
- [x] - Ajout de la structure ejs pour la connexion
- [x] - Ajout des partials \_footer & \_header
- [x] - Ajout de la dépendance dotenv + configuration
- [x] - Ajout du middleware cookie-session + configuration
- [x] - Ajout du middleware morgan + configuration
- [x] - Ajout du middleware express.json
- [x] - Ajout du middleware express.urlencoded
- [x] - Ajout de la configuration de EJS
- [x] - Ajout d'une idée du projet dans la partie README.md
- [x] - Implémentation de la dépendance colors
- [x] - Implémentation de la dépendance boxen
- [x] - Suppression de la dépendance boxen pour boxen@5.1.2 compatible avec les "requires"
- [x] - Mise à jour du fichier app.js avec implémentation du HOSTNAME
- [x] - Mise à jour du fichier app.js avec implémentation du PORT
- [x] - Implémentation des commentaires en tout genre
- [x] - Implémentation du controller précédemment créer
- [x] - Création d'un premier controller
- [x] - Création d'un router
- [x] - Ajout de la favicon de l'IT-Akademy
- [x] - Conception d'une première app fonctionnel
- [x] - Création de la structure
