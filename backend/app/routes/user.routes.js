module.exports = app => {
    const users = require('../controllers/user.controller.js');
    const middlewares = require("../middlewares");
    var router = require('express').Router();

    // Create a new
    router.post("/", users.create);

    // Retrieve all
    router.get("/", 
    // middlewares.authJwt.verifyToken, 
    users.findAll);

    // Retrieve all published
    router.get("/published", users.findAllPublished);

    // Retrieve a single with id
    router.get("/:id", users.findOne);

    // Update a with id
    router.put("/:id", users.update);

    // Delete a with id
    router.delete("/:id", users.delete);

    // Create a new 
    router.delete("/", users.deleteAll);

    app.use('/api/users', router);
}