// Middleware d'authentification (exemple simple)
module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
        // Logique de vérification du token
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};