import React, { useState, useEffect } from "react";
import { useTemplate } from "../providers/TemplateDataProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

async function createDocFinished(reqData) {

  return fetch("http://localhost:8080/api/doc/createDocFinished", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  }).then((data) => data.json());
}

async function createSectionBody(reqData) {
  console.log(reqData);
  return fetch("http://localhost:8080/api/doc/createSectionBody", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  }).then((data) => data.json());
}

async function getSectionTitles(template_id) {
  console.log("getting seciontitles " + template_id);
  return fetch(`http://localhost:8080/api/doc/getTitles/${template_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

function UseTemplateView() {
  const { thisTemplate } = useTemplate();
  const [body, setBody] = useState("");
  const [sectionTitles, setSectionTitles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const user_id = thisTemplate.user_id;

  useEffect(() => {
    getSectionTitles(thisTemplate._id).then((data) => setSectionTitles(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const create = await createDocFinished({
      user_id,
      template_id: thisTemplate._id,
    }).then((data) =>
      createSectionBody({
        section_id: sectionTitles[0]._id,
        body,
        docFinished_id: data._id,
      })
    );
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login">
      <h1 className="mt-2 col-12 textCenter">{thisTemplate.body}</h1>

      <Form onSubmit={handleSubmit}>
        {/* //map form Group, will be needed when more sectiontitles are implemented*/}
        {/* {sectionTitles.map && sectionTitles.map((sectionTitle, index) => {
          <Form.Group size="lg" controlId="userName" className="mt-2"> 
          <Form.Label>{index}. {sectionTitle.body}</Form.Label>
          <Form.Control
            autoFocus
            type="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
      })} */}
        <Form.Group size="lg" controlId="body" className="mt-2">
          <Form.Label>{sectionTitles[0]?.body}</Form.Label>
          <Form.Control
            autoFocus
            type="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>

        <Button
          size="lg"
          type="submit"
          className="justify-self-around mt-2 col-12"
          disabled={!body}
        >
          Complete
        </Button>
      </Form>
    </div>
  );
}

export default UseTemplateView;
