import React from 'react';
import {Container, Row, Nav, Col, List} from 'react-bootstrap';

function Header() {
    return(
    <Container>
        <Nav>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
            </Row>
        </Nav>
    </Container>
    // <nav className="nav navbar-light bg-light ">
    //     <ol className="d-flex flex-row justify-content-md-center">
    //         <li className="nav-item">
    //             <a className="nav-link">
    //                 insDocs
    //             </a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link">
    //                 Finished
    //             </a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link">
    //                 new
    //             </a>
    //         </li>
    //     </ol>
    // </nav>

    )
}


export default Header;