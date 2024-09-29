const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');

// Définir les routes pour les prescriptions
router.post('/', prescriptionController.createPrescription);
router.get('/', prescriptionController.getAllPrescriptions);

module.exports = router;