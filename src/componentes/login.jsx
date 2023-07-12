import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

 const Login = () => {
  const [loggedIn, setLogIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogIn(true);

  };
  return (
    <Form onSubmit={handleSubmit}>
    {loggedIn && (
      <Alert variant="success" onClose={() => setLogIn(false)} dismissible>
        Se ha inició sesión de forma correcta.
      </Alert>
    )}
    <Form.Group controlId="username">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="text" placeholder="Ingrese su nombre de usuario" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Ingrese su contraseña" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Ingresar
    </Button>
  </Form>
  );

    }

export default Login;