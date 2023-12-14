import { Container, Nav, Navbar } from 'react-bootstrap';
import '../Navbar-Component/Nav.modules.css'
import { Link } from 'react-router-dom'

const NavbarComp = () => {
  return (
    <header>
    <Navbar expand="lg" className="Navbar" data-bs-theme="dark">
      <Container className='opacity'>
        <img className="img-Logo" src="https://trello.com/1/cards/656b68d038e71faa56cd0e8b/attachments/656b68fc26b01dc1723afe97/previews/656b68fd26b01dc1723afed6/download/klipartz.com.png" alt="imgLogo" href="#" ></img>
        <Navbar.Brand ><Link to="/" className='color-stor'>Store Apple</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='color-toggle' />
        <Navbar.Collapse className='opacity'>
          <Nav className="t-1 ms-auto">
            <Nav.Link className='colorSS' href="#destacado">Destacado</Nav.Link>
            <Nav.Link className='colorSS' href="#favoritos">Favoritos</Nav.Link>
            <Nav.Link className='colorSS' href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link className='btn  colorSS'><Link to="/Login">  Iniciar Sesión </Link> </Nav.Link>
            <Nav.Link className='btn  colorSS'><Link to="/Register"> Registrarse </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavbarComp;