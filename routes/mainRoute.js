const express = require('express'); //import express

// 1.
const router  = express.Router(); 

// NOME CONTROLLER
const mainController = require('../controllers/mainController'); 
const utentiController = require('../controllers/utentiController'); 
const toDoController = require('../controllers/toDoController'); 

// TUTTI I PATH
router.get('/test', mainController.test); 
router.get('/getSteamGames', mainController.getSteamGames)
router.get('/getSteamProfile', mainController.getSteamProfile)
router.get('/getUtenti', utentiController.getUtenti)
router.get('/salvaUtente', utentiController.salvaUtente)
router.get('/getAllToDoList', toDoController.getToDos)
// 4. 
module.exports = router; // export to use in server.js