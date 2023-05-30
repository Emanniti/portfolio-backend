const express = require('express'); //import express

// 1.
const router  = express.Router(); 

// NOME CONTROLLER
const mainController = require('../controllers/mainController'); 

// TUTTI I PATH
router.get('/test', mainController.test); 
router.get('/getSteamGames', mainController.getSteamGames)
router.get('/getSteamProfile', mainController.getSteamProfile)
// 4. 
module.exports = router; // export to use in server.js