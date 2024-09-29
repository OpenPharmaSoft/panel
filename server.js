const express = require('express');
const app = express();
const loginRouter = require('./routes/login'); // Assurez-vous que le chemin est correct

app.use('/login', loginRouter); // Utilisez le routeur avec un chemin de base

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});