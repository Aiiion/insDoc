import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import insDoc from './insDoc.png';

function Header() {
    return(
    <Nav className="justify-content-around header" activeKey="/">
        
        <Nav.Item>
            <Link className="headerLink" to="/Templates">
                <b>Templates</b>
            </Link>
        </Nav.Item>

        <Nav.Item>
            <Link className="headerLink justify-content-center" to="/">
                <img src={insDoc} 
                className="pl-1 insDoc" width="75%" height="75%"
                />
            </Link>
        </Nav.Item>


        <Nav.Item>
            <Link className="headerLink" to="/Finished">
                <b>Finished</b>
            </Link>
        </Nav.Item>
    </Nav>
    )
}


export default Header;