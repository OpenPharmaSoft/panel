const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/dashboard');
        } else {
            res.status(401).render('login', { message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).render('login', { message: 'Server error' });
    }
};

exports.getRegisterPage = (req, res) => {
    res.render('register');
};

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        res.status(500).render('register', { message: 'Server error' });
    }
};