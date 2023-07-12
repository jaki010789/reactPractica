import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cerrarsesión from "./componentes/index";
import Logged from "./pages/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <header className="App-header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/Home"}>Inicio</Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
              <Nav.Link  as={Link} to={"/Log"}>Iniciar Sesión</Nav.Link>
             
             
            </Nav>
          </Navbar.Collapse>
          <Cerrarsesión ></Cerrarsesión>
        </Container>
      </Navbar>
      
    </header>
     <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Log" element={<Logged/>} />
      </Routes>
      </Router>
  );
}



export default App;
