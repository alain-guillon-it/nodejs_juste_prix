/**
 * ========================================================================================
 * DEPENDANCIES
 * ========================================================================================
 */
const router = require("express").Router();

/**
 * ========================================================================================
 * USING CONTROLLERS
 * ========================================================================================
 */
const myController = require("../App/controllers");

/**
 * ========================================================================================
 * GET ROUTE + CONTROLLER
 * ========================================================================================
 */
router.get(["/", "/home"], myController.getHome);
router.get("/login", myController.redirectGetLogin);
router.get("/login/admin", myController.getLogin);
router.get("/login/user", myController.getLogin);
router.get("/play", myController.getPlay);
router.get("/play/config", myController.getPlayConfig);
router.get("/logout", myController.getLogout);

/**
 * ========================================================================================
 * POST ROUTE + CONTROLLER
 * ========================================================================================
 */
router.post("/login/:role", myController.postLogin);
router.post("/play/config/create", myController.postPlayConfigCreate);
router.post("/play/config/delete", myController.postPlayConfigDelete);

/**
 * ========================================================================================
 * ROUTER EXPORT
 * ========================================================================================
 */
module.exports = router;
