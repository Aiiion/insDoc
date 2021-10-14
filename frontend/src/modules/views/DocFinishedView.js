import React, { useState, useEffect } from "react";
import { useTemplate } from "../providers/TemplateDataProvider";
import { Link } from "react-router-dom";

function DocFinishedView({ user }) {
  const { thisTemplate } = useTemplate();
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [template, setTemplate] = useState();

  const getTemplate = async () => {
    const response = await fetch(`https://insdoc.herokuapp.com/api/doc/getTemplate/${thisTemplate.template_id}`);
    const data = await response.json();
    setTemplate(data);
    console.log(template)
  };
  const getTitles = async () => { 
    console.log(template)
    const response = await fetch(`https://insdoc.herokuapp.com/api/doc/getTitles/${thisTemplate.template_id}`);
    const data = await response.json();
    setTitle(data);
  };
  const getBodys = async () => {
    const response = await fetch(`https://insdoc.herokuapp.com/api/doc/getSectionBody/${thisTemplate._id}`);
    const data = await response.json();
    setBody(data);
  };
  useEffect(() => {
    getTemplate()
    .then(getTitles)
    .then(getBodys)
  }, []);
  console.log(body)
  return (
    <div className="login">
      <h1 className="textCenter col-12">{template?.title}</h1>
      <p className="textCenter col-12"><b>{title[0]?.body}</b></p>
      <p className="textCenter col-12">{body[0]?.body}</p>
      <hr />
      <Link to="/Finished" className="btn btn-secondary col-12">Back</Link>
    </div>
  );
}

export default DocFinishedView;
