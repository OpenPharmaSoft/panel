const express = require('express');
const app = express();
const loginRouter = require('./routes/login');
const prescriptionsRouter = require('./routes/prescriptions');
const patientsRouter = require('./routes/patients');
const alertsRouter = require('./routes/alerts');
require('./config/database'); // Importer la configuration de la base de données

app.use(express.json()); // Middleware pour parser le JSON

app.use('/login', loginRouter);
app.use('/prescriptions', prescriptionsRouter);
app.use('/patients', patientsRouter);
app.use('/alerts', alertsRouter);

// Route par défaut pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});