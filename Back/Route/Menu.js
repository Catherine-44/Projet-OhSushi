const Menu = require("../Controleur/Menu")
const express = require('express');
const router = express.Router();
router.get("/menu",Menu.createmenu)
module.exports = router;