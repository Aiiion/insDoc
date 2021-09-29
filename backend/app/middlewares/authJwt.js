const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).send({ message: 'No token recived'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(403).send({ message: 'Unauthorized request, try to log in again'});
        }
        req.userId = decoded.id;
        next();
    });
};

// isAdmin = (req, res, next) => {
//     let thisUser = User.findById(req.userId);
//     if(thisUser.admin == true){

//     }
// }

const authJwt = {
    verifyToken
    // isAdmin
};

module.exports = authJwt;

