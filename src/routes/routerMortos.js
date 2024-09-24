const express = require("express");
const router = express.Router();
const mortosController = require("../controllers/mortosController");

router.post("/", mortosController.cadastrarMorto);
router.get("/", mortosController.listarMortos);
router.put("/:id", mortosController.editarMorto);
router.delete("/:id", mortosController.deletarMorto);

module.exports = router;
