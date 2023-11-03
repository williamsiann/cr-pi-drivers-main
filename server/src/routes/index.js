const { Router } = require("express");
const router = Router();

const getNameDrivers = require("../handlers/getDriverNameHandler");
const postNewDriver = require("../handlers/postDriverHandler");
const getAllDrivers = require("../handlers/getAllDriversHandler");
const getDriverById = require("../handlers/getDriverIdHandler");
const getAllTeams = require("../handlers/getAllTeamsHandler");

// Rutas de conductores (drivers)
router.get("/drivers/name", getNameDrivers);
router.get("/drivers/:id", getDriverById);
router.get("/drivers", getAllDrivers);
router.post("/drivers", postNewDriver);

// Rutas de equipos (teams)
router.get("/teams", getAllTeams);

module.exports = router;