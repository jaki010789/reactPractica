import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Cerrarsesión from "./index";

function App() {
  return (
   
      <header className="App-header">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">REACT-NAVBAR</Nav.Link>
            <Nav.Link href="#link">Inicio</Nav.Link>
            <NavDropdown title="menú principal" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">links</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                imágenes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">páginas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Cerrarsesión></Cerrarsesión>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  
  );
}

export default App;
