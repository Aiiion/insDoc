import React, {useState} from 'react';
import papen from '../components/papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import insDoc from '../components/insDoc.png';

// async function signUpUser(credentials) { //need to be reWritten
//   console.log("signup started")
//   return fetch('http://localhost:8080/api/auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//   .then(data => data.json())
//   .then(data => alert(data))
// }

function CustomiseTemplateView() {


    // const handleSubmit = async event => {
    //   event.preventDefault();
    //   if (confirmPassword != password){
    //       return alert("Passwords does not match")
    //   } 
    //   const create = await signUpUser({ // need to be reWritten
    //     username,
    //     password
    //   });
    //   console.log(create)
    // }

    return(
        <div className="login">
            
            
            <h1 className="mt-2 col-12 textCenter">Sign Up</h1>
            {/* <Form onSubmit={handleSubmit}>
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
            </Form> */}
            
        </div>
    );
}

export default CustomiseTemplateView;