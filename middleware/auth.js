const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.redirect('/login');
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};

exports.authorize = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    };
};