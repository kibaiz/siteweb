import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () =>{
  return(
    <>
    <div>
        <div className="col-12 mx-auto">
          <Navbar bg="light" expand="lg" fixed="top" className="shadow p-2 mb-5 bg-white rounded">
            <Container>
              <Navbar.Brand href="/">
                <h2 className="logo">C.E.D.I.I</h2>
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="navbar navbar-expand-lg mr-auto mb-2 mb-lg-0">
                    <Nav.Link className="item" href="/">Home</Nav.Link>
                    <Nav.Link className="item" href="/echange">Echange</Nav.Link>
                    <Nav.Link className="item" href="/documentation">Documentation</Nav.Link>
                    <Nav.Link className="item" href="/information">Information</Nav.Link>
                    <Nav.Link className="item" href="/contact">A propos</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
