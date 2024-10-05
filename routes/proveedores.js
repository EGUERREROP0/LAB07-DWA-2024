const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController");

router.get("/list", proveedorController.mostrar);

//Clear cliente POST
router.post("/crear", proveedorController.crear);

//Editar
router.post("/editar", proveedorController.editar);

//Eliminar
router.get("/borrar/:id", proveedorController.borrar);

module.exports = router;
