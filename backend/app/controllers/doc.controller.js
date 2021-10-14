const config = process.env;
// require('../config/auth.config');
const db = require("../models");
const DocTemplate = db.docTemplate;
const SectionTitle = db.sectionTitle;
const SectionBody = db.sectionBody;
const DocFinished = db.docFinished;
var jwt = require("jsonwebtoken");
const { sectionTitle } = require("../models");

exports.createTemplate = (req, res) => {
  const template = new DocTemplate({
    user_id: req.body.user_id,
    title: req.body.template,
  });

  template
    .save(template)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error occured when creating template",
      });
    });
};

exports.createSectionTitles = (req, res) => {
  //has problems, making requests throws error but saves data
  const template = req.body.template_id;
  let resData = [];

  req.body.body.map((el, position) => {
    const sectionTitle = new SectionTitle({
      template_id: template,
      body: el,
      position,
    });

    sectionTitle
      .save(sectionTitle)
      .then((data) => {
        resData.push(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "error saving sectionTitle",
        });
      });
  });
  res.send(resData);
};
exports.createSectionTitle = (req, res) => {
  const template_id = req.body.template_id;
  console.log(req.body.body);
  const sectionTitle = new SectionTitle({
    template_id: template_id,
    body: req.body.body,
  });

  sectionTitle
    .save(sectionTitle)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error saving sectionTitle",
      });
    });
};

exports.getSectionTitles = async (req, res) => {
  const { template_id } = req.params;

  await SectionTitle.find({ template_id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error saving sectionTitle",
      });
    });
};

exports.createDocFinished = (req, res) => {
  const docFinished = new DocFinished({
    template_id: req.body.template_id,
    user_id: req.body.user_id,
  });

  docFinished
    .save(docFinished)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error saving docFinished",
      });
    });
};

exports.createSectionBody = (req, res) => {
  const sectionBody = new SectionBody({
    section_id: req.body.section_id,
    body: req.body.body,
    docFinished_id: req.body.docFinished_id,
  });

  sectionBody.save(sectionBody).then((data) => {
    res.status(200).send({
      message: data || "works but where is data?",
    });
  });
};
exports.getSectionBody = async (req, res) => {
    const docFinished_id = req.params.id;
  
    await SectionBody.find(docFinished_id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "error getting template",
        });
      });
  };
exports.getDocTemplate = async (req, res) => {
  const id = req.params.id;

  await DocTemplate.findById(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error getting template",
      });
    });
};
exports.getAllDocFinished = async (req, res) => {
  const user_id = req.params;

  await DocFinished.find(user_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error getting finishedDocs",
      });
    });
};

exports.getDocFinished = async (req, res) => {
  const { id } = req.params;
  const docFinished = DocFinished.find(id);

  await SectionTitle.find(docFinished.template_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error getting sectionTitle",
      });
    });
};

exports.deleteDocTemplate = async (req, res) => {
  const id = req.params;

  await DocTemplate.findOneAndDelete(id)
    .then(
      res.status(200).send({
        message: "Template deleted along with related finished docs",
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error deleting template",
      });
    });
};

exports.getAllDocTemplates = async (req, res) => {
  const user_id = req.params;

  await DocTemplate.find(user_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error getting templates",
      });
    });
};

exports.deleteDocFinished = async (req, res) => {
  const id = req.params;

  await DocFinished.findOneAndDelete(id)
    .then(
      res.status(200).send({
        message: "Finished Doc deleted",
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error deleting template",
      });
    });
};
