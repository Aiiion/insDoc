import React, {useState} from 'react';
// import papen from '../papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LogIn() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState();

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div className="login">
            <h1>Login- fel</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="userName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
            </Form>
        </div>
    );
}

export default LogIn;