const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    //create user
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        admin: req.body.admin ? req.body.admin: false
    });

    //save user
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error occured when creating user"
            });
        });
        // res.status(200).send({message:"hejhej"});
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if(err) {
            res.status(500).send({ message: err});
            return;
        }

        if(!user) {
            return res.status(401).send({ message: "user not found."});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "invalid password"
            });
        }

        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 20000
        });

        res.status(200).send({
            id: user._id,
            username: user.username,
            admin: user.admin,
            accessToken: token
        });
    });
};
