const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const authRouter = require('./routes/auth');
const { authenticate, authorize } = require('./middleware/auth');
require('./config/database'); // Importer la configuration de la base de données

app.use(express.json()); // Middleware pour parser le JSON
app.use(express.urlencoded({ extended: true })); // Middleware pour parser les données de formulaire
app.use(cookieParser()); // Middleware pour parser les cookies

// Configurer CSP avec Helmet
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://stackpath.bootstrapcdn.com'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            scriptSrc: ["'self'", 'https://stackpath.bootstrapcdn.com', 'https://code.jquery.com', 'https://cdn.jsdelivr.net']
        }
    }
}));

// Configurer EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // Définir la mise en page par défaut

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', authRouter);

// Route par défaut pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// Route protégée par authentification et autorisation
app.get('/dashboard', authenticate, authorize(['admin', 'pharmacien', 'préparateur']), (req, res) => {
    res.render('home', { title: 'Dashboard' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});