import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../Navbar-Component/Nav.modules.css'

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="Navbar bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <img className="img-Logo" src="https://trello.com/1/cards/656b68d038e71faa56cd0e8b/attachments/656b68fc26b01dc1723afe97/previews/656b68fd26b01dc1723afed6/download/klipartz.com.png" alt="portadapeli" href="#" ></img>
        <Navbar.Brand href="#home" className='img-Logo'>EstorApple</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="t-1 ms-auto">
            <Nav.Link href="#destacado">Destacado</Nav.Link>
            <Nav.Link href="#favoritos">Favoritos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link className='btn btn-success' href="#contacto">Inciar Sessión</Nav.Link>
            <Nav.Link className='btn btn-success' href="#contacto">Registrarse</Nav.Link>
          </Nav>
          <Nav className=''>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp;