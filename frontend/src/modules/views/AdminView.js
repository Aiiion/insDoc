import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import insDoc from "../components/insDoc.png";

function AdminView() {
  const [users, setUsers] = useState([]);

  const deleteUser = async (user_id) => {
    console.log(user_id);
    const response = await fetch(`http://localhost:8080/api/users/${user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    getUsers();
  };
  const getUsers = async () => {
    console.log("fetch started");
    const response = await fetch("http://localhost:8080/api/users/");

    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
        <Card className="mb-3">
      <h1 className="textCenter">Admin view</h1>
      <hr/>
      <span className="textCenter mw-80">You can only delete users here, and as admin you may not leave</span>
      </Card>
      <ul>
        {users.length > 0 &&
          users.map((user, index) => {
            const { username, admin } = user;
            return (
            <Card className="mb-2">
              <li class="row textCenter m-2" key={`li-item-${index}`}>
                <h2>
                  {index} . {username}, {admin}
                </h2>
                <Button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                  Delete
                </Button>
                
              </li>
              </Card>
            );
          })}
      </ul>
    </div>
  );
}

export default AdminView;
