import React, { useState } from "react";
import { useTemplate } from "../providers/TemplateDataProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

async function saveSectionTitle(reqData) {
  console.log("save started");
  console.log(reqData);
  return fetch("http://localhost:8080/api/doc/createTitle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  })
    .then((data) => data.json())
    .then((data) => alert(data));
}

function CustomiseTemplateView() {
  const [body, setBody] = useState("");
  const { thisTemplate } = useTemplate();
  const [submitted, setSubmitted] = useState(false);
  const template_id = thisTemplate._id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const create = await saveSectionTitle({
      template_id,
      body,
    });
    console.log(create);
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <h1 className="mt-2 col-12 textCenter">{thisTemplate.title}</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName" className="mt-2">
          <Form.Label>Section Title</Form.Label>
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
          Finish insDoc
        </Button>
      </Form>
    </div>
  );
}

export default CustomiseTemplateView;
