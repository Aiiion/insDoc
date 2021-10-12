import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import papen from "../components/papen.png";
import { Link, Redirect } from "react-router-dom";
import { useTemplate } from "../providers/TemplateDataProvider";

function TemplateIcon({ templates }) {
  const { attachTemplate } = useTemplate();

  return (
    <div className="row justify-content-around">
      {templates.map &&
        templates.map((template, index) => {
          return (
            <Card className="justify-content-around col-6 icon" key={index}>
              <Card.Img variant="top" src={papen} height="100px" />
              <Card.Body>
                <Card.Title className="textCenter">{template.title}</Card.Title>
                <Link
                  className="btn btn-primary col-12 mt-2"
                  onClick={() => attachTemplate(template)}
                  to="/UseTemplate"
                  
                >
                  <b>Use</b>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default TemplateIcon;
