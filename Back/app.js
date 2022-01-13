const Menu = require("./Controleur/Menu")
const menuRoutes = require("./Route/Menu")
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const CommandeRoutes = require("./Route/Commande")

var mysql = require('mysql');


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
app.use("/menu",menuRoutes)
app.use("/Commande",CommandeRoutes)
module.exports = app; 

