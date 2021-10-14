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

    app.post( // CREATE A docTemplate
        "/api/doc/createTemplate",
        // middlewares.authJwt.verifyToken,
        controller.createTemplate
    );

    app.get( // GET A docTemplate
        "/api/doc/getTemplate/:id",
        // middlewares.authJwt.verifyToken,
        controller.getDocTemplate
    );

    app.post( // CREATE MANY sectionTitles, throws error
        "/api/doc/createTitles",
        controller.createSectionTitles
    );

    app.post( // CREATE A sectionTitle
        "/api/doc/createTitle",
        controller.createSectionTitle
    );

    app.get( // GET MANY sectionTitles
        "/api/doc/getTitles/:template_id",
        controller.getSectionTitles
        
    );

    app.get( // GET MANY docFinished
        "/api/doc/finishedDocs/:user_id",
        controller.getAllDocFinished
    )

    app.post( //CREATE A docFinished
        "/api/doc/createDocFinished",
        controller.createDocFinished
    )

    app.get( //GET A docFinished
        "/api/doc/getDocFinished/:docFinished_id",
        controller.getDocFinished
    )

    app.get( //GET A sectionBody
        "/api/doc/getSectionBody/:docFinished_id",
        controller.getSectionBody
    )

    app.get( //GET MANY docTemplates
        "/api/doc/docTemplates/:user_id",
        // middlewares.authJwt.verifyToken,
        controller.getAllDocTemplates
    )

    app.post( //CREATE A sectionBody
        "/api/doc/createSectionBody",
        controller.createSectionBody
    )
    
    app.delete(  //DELETE A docTemplate
        "/api/doc/deleteTemplate/:docTemplate_id",
        controller.deleteDocTemplate
    )

}