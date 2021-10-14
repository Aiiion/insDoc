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
    res.status(500).send({ message: "error retrieving users" });
  });
//   res.json({ message: "Hello World! this is find all" });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
  const user = req.body.user;
  return res.status(200).send(user);
};

// Update a Tutorial by the id in the request
exports.update = async(req, res) => {
  
  try{
    if(req.body.user.admin) {
      req.body.user.admin = false;
    } else {
      req.body.user.admin = true;
    }
    const user = req.body.user;
    await user.update()
    res.status(201).send({message: "user updated successfully"})
  }
  catch{
    res.status(400).send({message: "no bueno, bad request"})
  }
};

// Delete a Tutorial with the specified id in the request
exports.delete = async(req, res) => {
  
  try{
    const user = req.body.user;
    await user.delete()
    res.status(201).send({message: "deleted user succesfully:)"})
  }
  catch{
    res.status(400).send({message: "no bueno, bad request"})
  }
 
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
