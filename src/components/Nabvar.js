import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function Nabvar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
         <CartWidget/>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features"> Productos</Nav.Link>
          <Nav.Link href="#pricing">Ventas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Nabvar;
