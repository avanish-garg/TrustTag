const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/registerProduct', authController.registerProduct);

module.exports = router;
