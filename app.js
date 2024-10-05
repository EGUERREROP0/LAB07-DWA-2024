const express = require("express");
const routes = require("./routes/proveedores");
const routes2 = require("./routes/insumos");
const app = express();
const port = 8000;

const db = require("./db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(routes2);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hola !");
});

app.listen(port, () => {
  console.log("listening in http://localhost:" + port);
});
