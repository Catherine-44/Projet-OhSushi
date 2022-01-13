const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "",
    database: "test"
  });
  
exports.ajoutmenu = (req,res) => {
    con.connect(function() {
        console.log("UPDATE Commande SET nb = nb + 1 WHERE nom = " + req.body.commande)
        console.log(req.body.commande)
        var sql = 'UPDATE Commande SET nb = nb + 1 WHERE nom = "' + req.body.commande + '"';
    con.query(sql)

})
    
};