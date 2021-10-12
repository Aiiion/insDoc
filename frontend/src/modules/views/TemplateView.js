import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TemplateIcon from "../components/TemplateIcon";
import Form from "react-bootstrap/Form";

function TemplateView({ user }) {
  const [templates, setTemplates] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const user_id = user.id;

  const getTemplates = async(user_id) => {
    console.log("getting Templates " + user_id);
    const response = await fetch(`http://localhost:8080/api/doc/docTemplates/${user_id}`);
    
    const data = await response.json();
    setTemplates(data)
    setFilteredTemplates(data)
  }
 
  useEffect(() => {
    getTemplates(user_id)
  }, []);

  const filter = (e) => {
    const keyWord = e.target.value;
    console.log(e.target.value)
    console.log(templates)
    if (keyWord !== '') {
      const result = templates.filter((template) => {
        return template.title
          .toLowerCase()
          .startsWith(keyWord.toLowerCase());
      });
      setFilteredTemplates(result);
    } else {
      setFilteredTemplates(templates);
      console.log("reset")
    }
    setSearchParams(keyWord);
  };

  return (
    <div className="body">
      
        <Form.Control
          className="mt-3"
          autoFocus
          placeholder="search here..."
          type="searchParams"
          value={searchParams}
          onChange={filter}
        />
      
      <h1 className="textCenter mt-3">Your insDocs</h1>
      <hr />
      <TemplateIcon templates={filteredTemplates} />
    </div>
  );
}

TemplateView.propTypes = {
  user: PropTypes.object.isRequired,
};
export default TemplateView;
