const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pharma-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error: ', err));