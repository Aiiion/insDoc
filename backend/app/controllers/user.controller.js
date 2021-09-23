const db = require("../models");
const User = db.user;

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message:'Username can not be empty'});
        return;
        }
    if (!req.body.password) {
      res.status(400).send({ message:'Password can not be empty'});
      return;
    }

    //create user
    const user = new User({
        username: req.body.username,
        password: req.body.password,
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
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    res.json({message: 'Hello World! this is find all'})
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
  .then(data => {
      if(!data)
          res.status(404).send({ message: 'Could not find user where id=' + id});
      else res.send(data);
  })
  .catch(err => {
      res.status(500)
      .send({message: 'error retrieving user where id=' + id});
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};