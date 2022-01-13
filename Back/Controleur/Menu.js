const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "",
    database: "test"
  });

exports.createmenu = (req,res) => {
    con.connect(function() {
        console.log("camarche")
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('8', 'E18' )";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('2', 'E11' )";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('3', 'E12' )";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('4', 'E13')";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('5', 'E15')";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('6', 'E16')";
        con.query(sql)
        var sql = "INSERT INTO Commande (Id, Nom) VALUES ('7', 'E17')";
        con.query(sql)
})
    
};