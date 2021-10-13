import React, { useState, useEffect } from "react";
import { useTemplate } from "../providers/TemplateDataProvider";
import { Link } from "react-router-dom";

function DocFinishedView({ user }) {
  const { thisTemplate } = useTemplate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [template, setTemplate] = useState();

  //API no longer exists
  const getTemplate = async () => {
    const response = await fetch(`https://insdoc.herokuapp.com/api/doc/getTemplate/${user._id}`);
    const data = await response.json();
    setTemplate(data);
  };
  //does not work W/O previous API
  const getTitles = async () => { 
    const response = await fetch(`https://insdoc.herokuapp.com/api/getTitles/${template._id}`);
    const data = await response.json();
    setTitle(data);
  };
  const getBodys = async () => {
    const response = await fetch(`https://insdoc.herokuapp.com/api/doc/getSectionBody/${thisTemplate._id}`);
    const data = await response.json();
    setBody(data);
  };

  return (
    <div className="login">
      {/* <h1 className="mt-2 col-12 textCenter">{body?[0].body}</h1> */}
      <h1 className="textCenter">Under Construction</h1>
      <p className="join">you wouldn't like it right now anyway...</p>
      <hr />
      <Link to="/Finished" className="btn btn-secondary">Back</Link>
    </div>
  );
}

export default DocFinishedView;
