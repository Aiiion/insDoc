import React, {useState} from 'react';
import papen from '../components/papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';


async function createTemplate(credentials, setTemplate) { //need to be reWritten
  console.log("creating template")
  return fetch('http://localhost:8080/api/doc/createTemplate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .then(data => setTemplate(data))
}

function CreateTemplateView({ user }) {

    const [template, setTemplate] = useState();
    const [templateName, setTemplateName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const user_id = user.id;

    const handleSubmit = async event => {
      event.preventDefault();
      
      const create = await createTemplate({ // need to be reWritten
        user_id,
        templateName
      }, setTemplate);

      setSubmitted(true)
    }

    if (submitted) {
        return <Redirect to='/CustomiseTemplate' template={template}/>
      }

    return(
        <div className="login">
            
            <h1 className="mt-2 col-12 textCenter">Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="templateName" className="mt-2">
                <Form.Label>This insDoc should be called:</Form.Label>
                <Form.Control
                    autoFocus
                    type="templateName"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                />
                </Form.Group>
                
                <Button size="lg" type="submit" className="justify-self-around mt-2 col-12" 
                disabled={!templateName.length} >
                Create
                </Button>
            </Form>
            
        </div>
    );
}

export default CreateTemplateView;