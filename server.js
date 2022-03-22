const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/shared"));

app.get("/", function (req, res) {
  res.render("pages/index");
});
app.get("/sobre", function (req, res) {
  res.render("pages/about");
});
app.get("/carrinho", function (req, res) {
  res.render("pages/cart");
});
app.get("/contato", function (req, res) {
  res.render("pages/contact");
});
app.get("/login", function (req, res) {
  res.render("pages/login");
});
app.get("/produtos", function (req, res) {
  res.render("pages/products");
});
app.get("/cadastro", function (req, res) {
  res.render("pages/register");
});


app.listen(8080);
console.log("Servidor rodando");
