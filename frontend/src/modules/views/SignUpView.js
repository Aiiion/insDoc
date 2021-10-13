import React, {useState} from 'react';
import papen from '../components/papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import insDoc from '../components/insDoc.png';
import { Redirect } from 'react-router';


async function signUpUser(credentials) { //need to be reWritten
  console.log("signup started")
  return fetch('https://insdoc.herokuapp.com/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .then(alert('Account Created'))
}

function SignUpView() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async event => {
      event.preventDefault();
      if (confirmPassword != password){
          return alert("Passwords does not match")
      } 
      const create = await signUpUser({ // need to be reWritten
        username,
        password
      });
      console.log(create)
      setSubmitted(true)
    }

    if (submitted) {
      return <Redirect to='/Login'/>
    }

    return(
        <div className="login">
            {/* <h1 className="mt-4 col-12 textCenter">insDoc</h1> */}
            <div className="col-12 mt-4 d-flex justify-content-around">
              <img src={insDoc} className=""/>
              
            </div>
            <b className="col-12 join">join us...</b>
            
            <img src={papen} className="mt-2" alt="logo" width="150px"/>
            <h1 className="mt-2 col-12 textCenter">Sign Up</h1>
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
                <Form.Group size="lg" controlId="password" className="mt-2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="onfirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Form.Group>
                <Button size="lg" type="submit" className="justify-self-around mt-2 col-12" 
                disabled={!username.length && !password.length} >
                Sign Up
                </Button>
            </Form>
            <p className="textCenter col-12 mt-3">Already have an account?</p>
            <a href="/Login"><b>Sign in here!</b></a>
        </div>
    );
}

export default SignUpView;