const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { verifyToken } = require('../../config/auth');

router.get('/', verifyToken, dashboardController.getDashboard);

module.exports = router;
