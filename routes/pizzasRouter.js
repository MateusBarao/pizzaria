const express = require('express');

const router = express.Router();

const pizzasController = require ('../controllers/pizzasController');

router.get('/', pizzasController.listar);
router.get('/pizzas/busca', pizzasController.buscar);
router.get ('/pizzas/:id', pizzasController.mostrar);

module.exports = router;