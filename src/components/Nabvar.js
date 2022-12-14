import React from 'react';
/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';*/
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className="encabezado">
      <CartWidget />
      <Link  className="enc_nav"   to="/productos">Productos</Link>
      <Link className="enc_nav"  to="/productos/aretes"> Aretes</Link>
      <Link className="enc_nav"  to="/productos/poleras"> Poleras</Link>
      <Link className="enc_nav"  to="/Carrito"> Carrito</Link>
    </nav >
  )


}
/*

function Nabvar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <CartWidget />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Fernet Store</Nav.Link>
          <Nav.Link href="#features"> Productos</Nav.Link>
          <Nav.Link href="#pricing">Precios</Nav.Link>
          <span className="material-symbols-outlined">
            menu
        </span>
        </Nav>
      </Container>
    </Navbar>
  );
}
*/
export default Nav;
