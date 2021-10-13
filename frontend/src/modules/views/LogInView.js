import React, {useState} from 'react';
import papen from '../components/papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import insDoc from '../components/insDoc.png';
import { Redirect } from "react-router";

async function logInUser(credentials) {
  console.log("login started")
  return fetch('https://insdoc.herokuapp.com/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

function LogInView({ setUser}) {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async event => {
      event.preventDefault();
      const token = await logInUser({
        username,
        password
      });
      setUser(token);
      <Redirect to="/" />//funkar inte, varför?
    }

    return(
        <div className="login">
            <div className="col-12 mt-4 d-flex justify-content-around">
              <img src={insDoc} className=""/>
            </div>
            
            <img src={papen} className="mt-2" alt="logo" width="150px"/>
            <h1 className="mt-2 col-12 textCenter">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="userName" className="mt-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type="userName"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button size="lg" type="submit" className="justify-self-around mt-2 col-12" 
                disabled={!username.length && !password.length} >
                Login
                </Button>
            </Form>

            <p className="textCenter col-12 mt-3">Don't have an account?</p>
            <a href="/SignUp"><b>Sign up here!</b></a>
        </div>
    );
}
LogInView.propTypes = {
  setUser: PropTypes.func.isRequired
}
export default LogInView;