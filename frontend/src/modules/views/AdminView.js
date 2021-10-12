import React, {useEffect, useState} from 'react';
import papen from '../components/papen.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import insDoc from '../components/insDoc.png';
import { Redirect } from "react-router";

async function getUsers() {
  console.log("fetch started")
  return fetch('http://localhost:8080/api/users/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then(data => data.json())
}

function AdminView() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then(data => setUsers(data))
    }, [])

    console.log(users)

    return(
        <div>
            <ul>
        {users?.map(user => {
            <li>
                <p>{user.name}, {user.admin}</p>
                <Button>Delete</Button>
            </li>

        })}
        </ul>
        </div>
    )        
}

export default AdminView;