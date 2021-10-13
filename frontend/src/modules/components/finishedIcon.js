import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import papen from "../components/papen.png";

function FinishedIcon({ templates }) {
  return (
    <div className="row justify-content-around">
      {templates.map &&
        templates.map((template, index) => {
          return (
            <Card className="justify-content-center col-6 icon" key={index}>
              <Card.Img variant="top" src={papen} height="100px" />
              <Card.Body>
                <Card.Title className="textCenter">
                  {template.updatedAt}
                </Card.Title>
                <Link
                  className="btn btn-primary col-12 mt-2"
                  onClick={() => attachTemplate(template)}
                  to="ViewFinished"
                >
                  View
                </Link>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default FinishedIcon;
