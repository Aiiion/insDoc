import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import insDoc from "./insDoc.png";

function Header() {
  return (
    <Nav className="justify-content-evenly header" activeKey="/">
      <Nav.Item>
        <Link className="headerLink finished" to="/Finished">
          <b>Finished</b>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link className="headerLink justify-content-center" to="/Templates">
          <img src={insDoc} className="pl-1 insDoc" width="75%" height="75%" />
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link className="headerLink new" to="/createTemplate">
          <b>new</b>
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
