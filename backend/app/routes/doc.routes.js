const middlewares = require("../middlewares");
const controller = require("../controllers/doc.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post( //is working 28sept
        "/api/doc/createTemplate",
        middlewares.authJwt.verifyToken,
        controller.createTemplate
    );

    app.post(
        "/api/doc/createTitles",
        controller.createSectionTitles
    );

    app.get(
        "/api/doc/getTitles/:template_id",
        controller.getSectionTitles
        
    );

    app.get(
        "/api/doc/finishedDocs/:user_id",
        controller.getAllDocFinished
    )

    app.post(
        "/api/doc/createDocFinished",
        controller.createDocFinished
    )

    app.get(
        "/api/doc/getDocFinished/:docFinished_id",
        controller.getDocFinished
    )

    app.post(
        "/api/doc/createSectionBody",
        controller.createSectionBody
    )
}