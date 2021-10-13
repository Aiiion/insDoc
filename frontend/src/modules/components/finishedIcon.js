import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
                <Button
                  variant="primary"
                  className="col-12"
                  href="/useTemplate"
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default FinishedIcon;
