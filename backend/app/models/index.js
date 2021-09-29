const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.docTemplate = require("./docTemplate.model.js")(mongoose);
db.sectionTitle = require("./sectionTitle.model.js")(mongoose);
db.sectionBody = require("./sectionBody.model.js")(mongoose);
db.docFinished = require("./docFinished.model.js")(mongoose);

module.exports = db;