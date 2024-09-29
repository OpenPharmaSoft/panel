const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Définir les routes pour les patients
router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);

module.exports = router;