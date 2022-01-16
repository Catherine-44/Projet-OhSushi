const Commande = require("../Controleur/Commande")
const express = require('express');
const router = express.Router();
router.post("/add",Commande.ajoutmenu)
router.get("/get",Commande.getAll)
router.post("/retireun",Commande.retireun)
module.exports = router;
