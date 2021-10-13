import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

import { useTemplate } from "../providers/TemplateDataProvider";

async function createTemplate(credentials, attachTemplate) {
  //need to be reWritten
  console.log("creating template");
  return fetch("https://insdoc.herokuapp.com/api/doc/createTemplate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((data) => attachTemplate(data));
}

function CreateTemplateView({ user }) {
  const { attachTemplate } = useTemplate();
  const [template, setTemplate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const user_id = user.id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(template);
    const create = await createTemplate(
      {
        user_id,
        template,
      },
      attachTemplate
    );

    setSubmitted(true);
  };

  if (submitted && template) {
    return <Redirect to="/CustomiseTemplate" />;
  }

  return (
    <div className="login">
      <h1 className="mt-5 col-12 textCenter">Create insDoc</h1>

      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="templateName" className="mt-2">
          <Form.Label>This insDoc should be called:</Form.Label>
          <Form.Control
            autoFocus
            type="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          />
        </Form.Group>

        <Button
          size="lg"
          type="submit"
          className="justify-self-around mt-2 col-12"
          disabled={!template.length}
        >
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateTemplateView;
