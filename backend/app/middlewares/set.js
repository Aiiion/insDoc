const db = require("../models");
const User = db.user;

const findUserByParams = async(req, res, next) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);

    if(user){
        req.body.user = user;
        return next();
    }
    throw new Error();
    }
    catch(error){
        console.log(error)
        return res.status(500).send({ message: "bad request"})

    }

}
module.exports = findUserByParams;