const express = require("express");
const app = express();
const useRoute = require("./routes");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/shared"));
app.use(useRoute);

app.listen(8080);
console.log("Servidor rodando");
