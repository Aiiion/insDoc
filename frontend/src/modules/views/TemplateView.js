import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TemplateIcon from "../components/TemplateIcon";

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

  useEffect(() => {
    getTemplates(user.id).then((data) => setTemplates(data));
  }, []);

  return (
    <div className="body">
      <h1 className="textCenter mt-3">Your insDocs</h1>
      <br />

      <TemplateIcon templates={templates} />
    </div>
  );
}

TemplateView.propTypes = {
  user: PropTypes.object.isRequired,
};
export default TemplateView;
