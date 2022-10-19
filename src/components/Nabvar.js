import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nabvar() {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features"> nosotros</Nav.Link>
            <Nav.Link href="#pricing">ventas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Nabvar;
