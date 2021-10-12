import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TemplateIcon from "../components/TemplateIcon";
import Form from "react-bootstrap/Form";

async function getTemplates(user_id) {
  console.log("getting Templates " + user_id);
  return fetch(`http://localhost:8080/api/doc/docTemplates/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

function TemplateView({ user }) {
  const [templates, setTemplates] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    getTemplates(user.id).then((data) => setTemplates(data));
  }, []);

  return (
    <div className="body">
      <Form className="mt-3">
      <Form.Control
            autoFocus
            placeholder="search here..."
            type="searchParams"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
          />
      </Form>
      <h1 className="textCenter mt-3">Your insDocs</h1>
      <hr />
      

      <TemplateIcon templates={templates} />
    </div>
  );
}

TemplateView.propTypes = {
  user: PropTypes.object.isRequired,
};
export default TemplateView;
