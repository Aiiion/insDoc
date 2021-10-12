const db = require("../models");

const User = db.user;

// Create and Save a new user
exports.create = (req, res) => {};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  User.find().then((data) => {
    if (!data)
      res.status(404).send({ message: "Could not find users"});
    else res.send(data);
  })
  .catch((err) => {
    res.status(500).send({ message: "error retrieving user where id=" + id });
  });
//   res.json({ message: "Hello World! this is find all" });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Could not find user where id=" + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "error retrieving user where id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
