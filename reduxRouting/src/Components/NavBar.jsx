import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function NavBar() {
    const cartProducts = useSelector((state) =>state.cart);
  
    return (
        <div><Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to='/' as={Link}>Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text><Nav.Link to='/cart' as={Link} >My Cart {cartProducts.length}</Nav.Link></Navbar.Text>
            </Navbar.Collapse>
        </Navbar></div>
    )
}

export default NavBar