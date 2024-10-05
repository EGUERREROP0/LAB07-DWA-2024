const express = require("express");
const router = express.Router();
const insumoController = require("../controllers/insumoController");

router.get("/listarInsumo", insumoController.mostrar2);

//Crear insumo
router.post("/crearInsumo", insumoController.crear);

//Editar Insumo
router.post("/editarInsumo", insumoController.editar);

//Borar
router.get("/borarInsumo/:id", insumoController.borrar2);

module.exports = router;
