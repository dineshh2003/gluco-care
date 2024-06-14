// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/MedicineController');

router.post('/orders', orderController.createOrder);

module.exports = router;
