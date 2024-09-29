const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    // Définir le schéma de l'alerte
});

module.exports = mongoose.model('Alert', alertSchema);