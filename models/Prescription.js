const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    // Définir le schéma de la prescription
});

module.exports = mongoose.model('Prescription', prescriptionSchema);