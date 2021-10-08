import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import papen from "../components/papen.png"

function TemplateIcon({templates}) {

  return (
    <div className="row justify-content-around">
        {templates.map && templates.map((template, index) => {
            return (
                <Card className="justify-content-center col-5" key={index}>
                    <Card.Img variant="top" src={papen} height="100px" />
                    <Card.Body>
                        <Card.Title className="textCenter">{template.title}</Card.Title>
                        <Button className="col-12" variant="primary" href="/useTemplate">Use</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </div>
  );
}
// TemplateIcon.propTypes = {
//     templates: PropTypes.array
//   }
export default TemplateIcon;
