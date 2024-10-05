const express = require('express');
const { fetchPatients } = require('../controllers/patientController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/patients', authenticateJWT, fetchPatients);

module.exports = router;