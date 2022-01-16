const Commande = require("./Controleur/Commande")
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const CommandeRoutes = require("./Route/Commande")

Commande.demarremysql
const app = express()

//Header CORS MiddleWare

app.use((req, res, next)=>{
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Autorization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); 
})
app.use(cors())
app.use(bodyParser.json());
app.use("/Commande",CommandeRoutes)
app.use('/audio', express.static(path.join(__dirname, 'audio')));
module.exports = app; 

