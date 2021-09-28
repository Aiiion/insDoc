const db = require("../models")
const User = db.user;

checkForDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if(err){
            res.status(500).send({ message: err});
            console.log('err');
            return;
        }
        if(user){
            res.status(400).send({ message: "Username already in use, try another."});
            console.log('user');
            return;
        }
        next();
    })
}

module.exports = checkForDuplicateUsername;