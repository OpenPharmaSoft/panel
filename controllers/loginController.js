const User = require('../models/User');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    // Logique de connexion (authentification)
    // Par exemple, vérifier le nom d'utilisateur et le mot de passe
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};