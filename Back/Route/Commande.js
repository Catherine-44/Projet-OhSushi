const Commande = require("../Controleur/Commande")
const express = require('express');
const router = express.Router();
router.post("/add",Commande.ajoutmenu)
module.exports = router;