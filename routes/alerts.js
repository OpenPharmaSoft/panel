const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

// Définir les routes pour les alertes
router.post('/', alertController.createAlert);
router.get('/', alertController.getAllAlerts);

module.exports = router;