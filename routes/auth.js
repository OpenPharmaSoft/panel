const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assurez-vous de créer un modèle User

// Route pour afficher la page de connexion
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Route de login
router.post('/login', async (req, res) => {
    // Implémentez la logique de login ici
});

// Route pour afficher la page d'inscription
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

// Route de register
router.post('/register', async (req, res) => {
    // Implémentez la logique de register ici
});

module.exports = router;