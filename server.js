const express = require("express");


const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/shared'));


app.get("/", function (req, res) {
    res.render("pages/index");
  });

app.listen(8080);
console.log("Servidor rodando");


