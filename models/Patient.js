const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    // Définir le schéma du patient
});

module.exports = mongoose.model('Patient', patientSchema);