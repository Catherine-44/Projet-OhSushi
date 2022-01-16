const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

exports.ajoutmenu = (req,res) => {
        var sql = 'UPDATE Commande SET nb = nb + 1 WHERE nom = "' + req.body.commande + '"';
        con.query(sql, function(err, result){
            if (err) console.log(err);
            res.send()
        })

};

exports.getAll =(req, res) => {
    var sql = "SELECT Nom, nb FROM Commande WHERE nb != 0"
    con.query(sql, function(err, result){
        if (err) console.log(err);
        res.send(result)
    })
}

exports.retireun = (req, res) =>{
    var sql = 'UPDATE Commande SET nb = nb - 1 WHERE nom = "' + req.body.commande + '"';
    con.query(sql, function(err, result){
        if (err) console.log(err);
        res.send()
    })
}

exports.demarremysql = () => {
    con.connect()
}
